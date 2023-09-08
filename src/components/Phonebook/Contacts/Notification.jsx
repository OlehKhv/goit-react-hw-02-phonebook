import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Notification extends Component {
    static propTypes = { message: PropTypes.string.isRequired };

    render() {
        return <h4>{this.props.message}</h4>;
    }
}

export default Notification;
