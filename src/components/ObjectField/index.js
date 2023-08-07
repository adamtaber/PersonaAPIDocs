import React from 'react';
import styles from './styles.module.css'

export default function ParamFormat({field, type, nonNull, category}) {
  return (
    // <div style={{display: 'flex'}}>
    <div>
      <p>
        <span className={styles.parameter}>{field}</span>
        <span className={styles.parameterSeparator}> - </span>
        <span className={styles.parameter}>{type}</span>
        {nonNull &&
          <span>
            <span> </span>
            <span className={styles.parameter}>non-null</span>
          </span>
        }
        <span> </span>
        <span className={styles.parameter}>{category}</span>
      </p>
    </div>
  )
}