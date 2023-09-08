import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const INITIAL_STATE = {
    contacts: [],
    filter: null,
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

    handleDeleteContact = ({
        target: {
            dataset: { id },
        },
    }) => {
        this.setState(prev => ({
            contacts: [...prev.contacts].filter(contact => contact.id !== id),
        }));
    };

    handleFilterContacts = ({ target: { value } }) => {
        if (!value) {
            this.setState({
                filter: null,
            });
            return;
        }

        this.setState(prev => ({
            filter: [...prev.contacts].filter(({ name }) =>
                name.toLowerCase().includes(value.toLowerCase())
            ),
        }));
    };

    handleDeleteAllContacts = () => {
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        const { contacts, filter } = this.state;
        return (
            <section>
                <h2>{this.props.title}</h2>
                <Form handleAddContact={this.handleAddContact} />
                <Filter
                    handleFilterContacts={this.handleFilterContacts}
                    handleDeleteAllContacts={this.handleDeleteAllContacts}
                />
                <Contacts
                    contacts={contacts}
                    filtredContacts={filter}
                    handleDeleteContact={this.handleDeleteContact}
                />
            </section>
        );
    }
}

export default Section;
