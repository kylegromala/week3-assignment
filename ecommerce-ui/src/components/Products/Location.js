import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Location extends Component {
    static propTypes = {
        location: PropTypes.shape({
            city: PropTypes.string,
            country: PropTypes.string,
        })

    }
};

export default Location;