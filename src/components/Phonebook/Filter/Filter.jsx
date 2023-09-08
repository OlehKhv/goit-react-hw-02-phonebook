import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
    static propTypes = {
        handleFilterContacts: PropTypes.func.isRequired,
        handleDeleteAllContacts: PropTypes.func.isRequired,
    };

    render() {
        const { handleDeleteAllContacts, handleFilterContacts } = this.props;
        return (
            <>
                <label>
                    Search contact
                    <input type="text" onChange={handleFilterContacts} />
                </label>
                <button onClick={handleDeleteAllContacts}>
                    Clear phonebook
                </button>
            </>
        );
    }
}

export default Filter;
