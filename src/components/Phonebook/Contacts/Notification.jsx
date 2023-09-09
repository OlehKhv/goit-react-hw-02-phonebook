import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NotificationText } from './Contacts.styled';

export class Notification extends Component {
    static propTypes = { message: PropTypes.string.isRequired };

    render() {
        return <NotificationText>{this.props.message}</NotificationText>;
    }
}

export default Notification;
