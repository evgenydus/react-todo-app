import React from 'react';

import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class AddTodo extends React.Component {

  render() {

    return(
      <div className="input-container">
        <input className="input" type="text"/>
        <button className="add-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  }
}

export default AddTodo;
