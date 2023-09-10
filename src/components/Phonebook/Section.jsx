import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { MainTitle } from './Section.styled';

const INITIAL_STATE = {
    contacts: [],
    filter: '',
};

export class Section extends Component {
    static propTypes = { title: PropTypes.string.isRequired };

    state = {
        ...INITIAL_STATE,
    };

    handleAddContact = contact => {
        if (this.state.contacts.some(({ name }) => name === contact.name)) {
            alert(`${contact.name} is already in contacts!`);
            return;
        }

        this.setState(prev => ({
            ...prev,
            contacts: [{ id: nanoid(), ...contact }, ...prev.contacts],
        }));
    };

    handleDeleteContact = id => {
        this.setState(prev => ({
            contacts: [...prev.contacts].filter(contact => contact.id !== id),
        }));
    };

    handleFilterContacts = ({ target: { value } }) => {
        this.setState({ filter: value });
    };

    getFilteredContacts = () => {
        const { contacts, filter } = this.state;

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    handleDeleteAllContacts = () => {
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        return (
            <section>
                <MainTitle>{this.props.title}</MainTitle>
                <Form handleAddContact={this.handleAddContact} />
                <Filter handleFilterContacts={this.handleFilterContacts} />
                <Contacts
                    contacts={this.getFilteredContacts()}
                    handleDeleteContact={this.handleDeleteContact}
                    handleDeleteAllContacts={this.handleDeleteAllContacts}
                />
            </section>
        );
    }
}

export default Section;
