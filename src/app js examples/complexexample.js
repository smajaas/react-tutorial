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
    author: 'Peter Lynch',
    title: 'One Upon the Wall Street',
    img: 'https://m.media-amazon.com/images/I/71pvFCvMM2L._AC_UY327_FMwebp_QL65_.jpg',
    id: 2,
  },
];

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, getBook, id } = props;
  // console.log(props);
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>click me</button>

      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
