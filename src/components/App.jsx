import { Component } from 'react';
import { WrapperRoot } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    let contacts = localStorage.getItem('contacts');
    if (!contacts) {
      
      let contacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
      this.setState({ contacts: contacts });
    } else {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = contact => {
    this.setState(prev => {
      return { contacts: [...prev.contacts, contact], name: '', number: '' };
    });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = id => {
    this.setState(prev => ({ contacts: prev.contacts.filter(item => item.id !== id) }));
  };

  render() {
    return (
      <WrapperRoot>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} contacts={this.state.contacts} />
        <h2>Contacts</h2>
        <Filter changeFilter={this.handleChangeFilter} />
        <ContactList
          contacts={
            this.state.filter.length > 0
              ? this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
              : this.state.contacts
          }
          onDelete={this.handleDeleteContact}
        />
      </WrapperRoot>
    );
  }
}