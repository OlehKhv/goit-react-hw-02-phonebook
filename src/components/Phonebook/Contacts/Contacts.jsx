import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from './Notification';

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
                <h3>Contacts</h3>
                {contacts.length ? (
                    <ul>
                        {(filtredContacts ?? contacts).map(
                            ({ id, name, number }) => {
                                return (
                                    <li key={id}>
                                        <p>
                                            {name}: {number}
                                        </p>
                                        <button
                                            onClick={handleDeleteContact}
                                            data-id={id}
                                        >
                                            Delete
                                        </button>
                                    </li>
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
