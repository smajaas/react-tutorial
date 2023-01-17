import React from 'react';
import ReactDOM from 'react-dom/client';

// function Greeting() {
//   return <h2>My First Component</h2>;
// }
function Greeting() {
  return (
    <>
      <div>
        <h2>hello people</h2>
        <ul>
          <li>
            <a href='#home'>hello world</a>
          </li>
        </ul>
      </div>
      <h2>hello world 2</h2>
    </>
  );
}
// function Greeting() {
//   return (
//     <div>
//       <h2>My First Component</h2>
//     </div>
//   );

// }
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);
