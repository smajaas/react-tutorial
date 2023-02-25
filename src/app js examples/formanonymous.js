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
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input
          type='text'
          name='product'
          onChange={(e) => console.log(e.target.value)}
          style={{ margin: '1rem 0' }}
        />
        <button type='submit'>submit</button>
        <div>
          <button onClick={() => console.log('click me')} type='button'>
            click me
          </button>
        </div>
      </form>
    </section>
  );
};
const Book = (props) => {
  const { img, title, author } = props;
  //console.log(props);
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
