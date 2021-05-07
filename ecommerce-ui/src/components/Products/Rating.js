import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
    static propTypes = {
        stars: PropTypes.number,
        reviews: PropTypes.number,
    }
};

export default Rating;