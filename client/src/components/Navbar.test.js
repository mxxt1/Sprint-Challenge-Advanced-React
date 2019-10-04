import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import * as rtl from '@testing-library/react';


it('toggles darkmode', () => {
    const { getByTestId } = rtl.render(<Navbar />);
    rtl.fireEvent.click(getByTestId('navbutton'));
})
