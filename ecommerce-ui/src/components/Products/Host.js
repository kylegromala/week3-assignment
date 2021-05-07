import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Host extends Component {
    static propTypes = {
        name: PropTypes.string,
        isSuperhost: PropTypes.bool,
    }
};

export default Host;