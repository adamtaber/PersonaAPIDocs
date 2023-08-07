import React from 'react';
import styles from './styles.module.css'

export default function ParamFormat({param, type}) {
  return (
    <div style={{display: 'flex'}}>
      <p>
        <span className={styles.parameter}>{param}</span>
        <span className={styles.parameterSeparator}> - </span>
        <span className={styles.parameter}>{type}</span>
      </p>
    </div>
  )
}