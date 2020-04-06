import React, { HTMLAttributes } from 'react';

import './logo.scss';
const logo = require('./images/material-zilla.png') as string;

export default (props: HTMLAttributes<any>) =>
    <img src={logo} className="logo" {...props} />
