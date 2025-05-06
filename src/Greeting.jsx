import React from 'react';

function Greeting({ name = "World", children }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      {children && <h2>{children}</h2>}
    </div>
  );
}

export default Greeting;
