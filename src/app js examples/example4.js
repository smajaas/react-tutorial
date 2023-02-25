import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Colleen Hoover',
    title: 'It Starts with Us',
    img: './Images/book-1.jpg',
    id: 1,
  },
  {
    author: 'Trey Gowdy',
    title: 'Start, Stay, or Leave',
    img: 'https://m.media-amazon.com/images/I/41qGiu+6bpL._SX331_BO1,204,203,200_.jpg',
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        const { img, author, title, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
