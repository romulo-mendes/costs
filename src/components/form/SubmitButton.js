import React from 'react';
import styles from './SubmitButton.module.css'

// import { Container } from './styles';

function SubmitButton({text}) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton;