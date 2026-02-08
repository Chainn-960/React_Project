import React from 'react';

export default function Demo() {
  const user = 'Eve';
  console.log('Demo component rendered, user=', user);

  return (
    <div>
      <h2>Demo.jsx</h2>
      <p>Hello, {user}!</p>
      <button onClick={() => alert(`Hello, ${user}`)}>Say hello</button>
    </div>
  );
}