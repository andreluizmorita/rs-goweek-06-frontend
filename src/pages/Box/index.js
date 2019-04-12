import React, { Component } from 'react';

import { MdInsertDriveFile } from 'react-icons/md';

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import './styles.css';

export default class Main extends Component {
  state = {
    newBox: ''
  };

  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt="" />
          <h1>DropBox</h1>
        </header>
        <ul>
          <li>
            <a href="">
              <MdInsertDriveFile size={24} color="#A5CFFF" />
              <strong>Desafio.pdf</strong>
            </a>
            <span>há 3 minutos atrás</span>
          </li>
        </ul>
      </div>
    );
  }
}
