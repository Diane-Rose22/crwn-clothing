import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
    <buttom className='custom-button' {...otherProps}>
        {children}
    </buttom>
)

export default CustomButton;