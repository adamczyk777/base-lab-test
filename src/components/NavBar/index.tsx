import * as React from 'react';
import './index.css';
import { Size } from '../../util/Enum';
import Text from '../Text';

export const NavBar = () => (
    <div className="NavBar">
        <Text size={Size.H1} color={'#ffffff'}>Base Tests</Text>
    </div>
);