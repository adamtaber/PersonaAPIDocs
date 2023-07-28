import React from 'react'
import CodeBlock from '@theme/CodeBlock';
import MDXContent from '@theme/MDXContent';

export default function allPersonas() {
  return (
    <div>
      <p>MyComponent rendered !</p>
      <p>bool={true ? 'true' : 'false'}</p>
      <p>
        <button onClick={() => console.log('test')}>toggle bool</button>
      </p>
    </div>
  );
}