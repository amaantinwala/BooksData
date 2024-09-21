import React, { useState } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

import { BookMarkedIcon } from 'lucide-react';

const BookCard = ({ book }) => {
  const { title, imageLinks, description } = book.volumeInfo;

  const [isBookmarked, setIsBookmarked] = useState(false);

  const [bookmarkedBook, setBookmarkedBook] = useState([]);

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  const setBookmarked = () => {
    setIsBookmarked(!isBookmarked);
    isBookmarked && setBookmarkedBook(book);
  };

  return (
    <Card className='mt-6 border border-light-green-100 '>
      <CardHeader
        className='h-48 bg-cover bg-center mt-2 shadow-none'
        style={{ backgroundImage: `url(${imageLinks?.thumbnail})` }}
      ></CardHeader>
      <CardBody>
        <Typography variant='h5' color='blue-gray' className='mb-2'>
          {title}
        </Typography>
        <Typography className='max-h-48'>
          {truncateText(description, 100)}
        </Typography>
      </CardBody>
      <CardFooter className='pt-0 flex justify-between'>
        <Button>Read More</Button>
        <button
          className='bg-black rounded-lg px-3 py-2'
          onClick={setBookmarked}
        >
          {isBookmarked ? (
            <BookMarkedIcon color='white' />
          ) : (
            <p className='text-white'>Bookmark</p>
          )}
        </button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
