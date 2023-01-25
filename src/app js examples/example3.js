import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const author = 'Colleen Hoover';
const Book = () => {
  const title = 'It Starts with Us';

  return (
    <article className='book'>
      <img src='./Images/book-1.jpg' alt='It Starts with Us' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
