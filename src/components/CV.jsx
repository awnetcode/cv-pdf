import { forwardRef } from 'react';
import './styles/cv.css';

import SideBar from './SideBar';
import MainPart from './MainPart';

const CV = forwardRef((props, ref) => {
  return (
    <div id='document-container' ref={ref}>
        <SideBar></SideBar>
        <MainPart></MainPart>
    </div>
  )
});

export default CV