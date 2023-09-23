import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper, Text, Input, Button, ErrorText } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

let userSchema = yup.object({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  number: yup
    .string()
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/)
    .required(),
});

export class ContactForm extends Component {
  handleClickAddContact = e => {
    e.preventDefault();
    const { contacts } = this.props;
    if (contacts.find(contact => contact.name === this.state.name) === undefined) {
      const item = { id: nanoid(), name: this.state.name, number: this.state.number };
      this.props.addContact(item);
    } else {
      alert(`${this.state.name} is already in contacts.`);
    }
  };

  handleOnSubmit = (values, actions) => {
    const { contacts } = this.props;
    if (contacts.find(contact => contact.name === values.name) === undefined) {
      const item = { id: nanoid(), name: values.name, number: values.number };
      this.props.addContact(item);
      actions.resetForm();
    } else {
      alert(`${values.name} is already in contacts.`);
    }
  };

  render() {
    return (
      <Formik initialValues={initialValues} onSubmit={this.handleOnSubmit} validationSchema={userSchema}>
        <Wrapper>
          <Text>Name</Text>
          <Input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          <ErrorMessage name="name">
            {() => (
              <ErrorText>
                Wrong name: Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob
                Mercer, Charles de Batz de Castelmore d'Artagnan
              </ErrorText>
            )}
          </ErrorMessage>
          <Text>Number</Text>
          <Input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <ErrorMessage name="number">
            {() => (
              <ErrorText>
                Phone number must be digits and can contain spaces, dashes, parentheses and can start with +
              </ErrorText>
            )}
          </ErrorMessage>
          <Button type="Submit">Add contact</Button>
        </Wrapper>
      </Formik>
    );
  }
}