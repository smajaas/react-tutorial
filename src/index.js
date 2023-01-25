import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  author: 'Colleen Hoover',
  title: 'It Starts with Us',
  img: './Images/book-1.jpg',
};

const secondBook = {
  author: 'Trey Gowdy',
  title: 'Start, Stay, or Leave',
  img: 'https://m.media-amazon.com/images/I/41qGiu+6bpL._SX331_BO1,204,203,200_.jpg',
};

const BookList = () => {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
