import React, { useState } from 'react';
import axios from 'axios';

import { Search } from 'lucide-react';
import BookCard from './components/BookCard';

const App = () => {
  const [search, setSearch] = useState('');
  const [booksData, setBooksData] = useState([]);
  // console.log(booksData);
  const searchBooks = value => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDC9EbY8Z5ozPp9nMNDGe1DoAzgTL9KkNc`
      )
      .then(response => setBooksData(response.data.items))
      .catch(error => console.error(error));
  };
  return (
    <div className='p-1 h-screen'>
      <div className='flex justify-center items-center rounded-full border border-blue-gray-800 m-2 p-1'>
        <input
          type='text'
          className='w-full text-slate-50 capitalize font-mono border-none text-xl p-2 m-1 focus:outline-none '
          placeholder='Search Books here...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className='text-slate-50 p-4 border-l-2 border-blue-gray-800  self-center'
          onClick={() => searchBooks(search)}
        >
          <Search size={30} />
        </button>
      </div>
      <hr />

      <div className='grid md:grid-cols-4 gap-2 mt-1 p-2 sm:grid-cols-2'>
        {booksData.length > 0 ? (
          booksData.map(data => <BookCard book={data} key={data.id} />)
        ) : (
          <p className='h-full text-slate-100'>Search to find books...</p>
        )}
      </div>
    </div>
  );
};

export default App;
