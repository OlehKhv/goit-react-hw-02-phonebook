import { Component } from 'react';
import PropTypes from 'prop-types';
import { InputForm } from '../Form/Form.styled';
import { ClearButton, FilterField, LabelSearchInput } from './Filter.styled';

export class Filter extends Component {
    static propTypes = {
        handleFilterContacts: PropTypes.func.isRequired,
        handleDeleteAllContacts: PropTypes.func.isRequired,
    };

    render() {
        const { handleDeleteAllContacts, handleFilterContacts } = this.props;
        return (
            <FilterField>
                <div>
                    <LabelSearchInput htmlFor="filter">
                        🔍Search contact
                    </LabelSearchInput>
                    <InputForm
                        name="filter"
                        id="filter"
                        type="text"
                        placeholder="🙍‍♂️   Enter name"
                        onChange={handleFilterContacts}
                    />
                </div>

                <ClearButton onClick={handleDeleteAllContacts}>
                    ❌ Clear phonebook
                </ClearButton>
            </FilterField>
        );
    }
}

export default Filter;
