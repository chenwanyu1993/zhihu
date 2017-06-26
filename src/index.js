import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { NavBar, Icon } from 'antd-mobile';

ReactDOM.render(
  <div>
    <NavBar leftContent="back"
      mode="light"
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
  </div>
,document.getElementById("root"));