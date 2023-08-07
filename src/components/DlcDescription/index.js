import React from 'react';
import styles from './styles.module.css'

export default function ParamFormat() {
  return (
    <p>Input <span className={styles.parameter}>true</span> 
       to include dlc content in the query results, or 
       <span className={styles.parameter}>false</span> 
       to exclude dlc content from the query results.</p>
  )
}