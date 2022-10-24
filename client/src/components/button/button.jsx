import React from 'react';
import styles from './button.module.css';

function Button({ func, caption }) {
  return (
    <button className={styles.self} onClick={() => func()}>
      {caption}
    </button>
  );
}

export default Button;
