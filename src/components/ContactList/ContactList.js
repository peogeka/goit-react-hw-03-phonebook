import { Component } from 'react';
import { Item, Text, List, Button, Wrapper } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <>
        <List>
          {contacts.map(item => (
            <Item key={item.id}>
              <Wrapper>
                <Text>
                  {item.name}: {item.number}
                </Text>
                <Button onClick={() => this.props.onDelete(item.id)}>Delete</Button>
              </Wrapper>
            </Item>
          ))}
        </List>
      </>
    );
  }
}