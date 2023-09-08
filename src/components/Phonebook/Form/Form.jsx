import React, { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    name: '',
    number: '',
};

export class Form extends Component {
    static propTypes = {
        handleAddContact: PropTypes.func.isRequired,
    };

    state = {
        ...INITIAL_STATE,
    };

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    addContact = e => {
        e.preventDefault();
        this.props.handleAddContact(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({
            ...INITIAL_STATE,
        });
    };

    render() {
        return (
            <form onSubmit={this.addContact}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleInput}
                    />
                </label>

                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleInput}
                    />
                </label>

                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default Form;
