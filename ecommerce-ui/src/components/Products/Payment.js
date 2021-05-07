import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
    static propTypes = {
        payment: PropTypes.number,
        description: PropTypes.string,
    }
};

export default Payment;
