import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Talal Afaan</h2>;
const Message = () => {
  return <p>hey boys</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
