import React from 'react';

import './logo.scss';
const logo = require('./images/approved-logo-orignal.png') as string;

export default () =>
    <img src={logo} className="logo" />
