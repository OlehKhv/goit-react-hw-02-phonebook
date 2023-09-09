import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from './Notification';
import {
    ContactItem,
    ContactText,
    DeleteButton,
    SecondTitle,
} from './Contacts.styled';

export class Contacts extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ).isRequired,
        filtredContacts: PropTypes.arrayOf(
            PropTypes.exact({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                number: PropTypes.string.isRequired,
            })
        ),
    };

    render() {
        const { contacts, filtredContacts, handleDeleteContact } = this.props;
        return (
            <div>
                <SecondTitle>Contacts</SecondTitle>
                {contacts.length ? (
                    <ul>
                        {(filtredContacts ?? contacts).map(
                            ({ id, name, number }) => {
                                return (
                                    <ContactItem key={id}>
                                        <ContactText>
                                            🧑 {name}: {number}
                                        </ContactText>
                                        <DeleteButton
                                            onClick={handleDeleteContact}
                                            data-id={id}
                                        >
                                            ❌ Delete
                                        </DeleteButton>
                                    </ContactItem>
                                );
                            }
                        )}
                    </ul>
                ) : (
                    <Notification message="Your phone book is empty!" />
                )}
            </div>
        );
    }
}

export default Contacts;
