import React, { useState, ChangeEvent } from 'react';
import Input from './components/Input/Input'; // Import the Input component
import Button from './components/Button/Button'; // Import the Button component
import Text from './components/Text/Text'; // Import the Text component
import Card from './components/Card/Card'; // Import the Card component
import Carousel from './components/Carousel/Carousel' // Import the Carousel component
import Mosaic from './components/Mosaic/Mosaic' // Import the Carousel component

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const slides = [
    {
      slide: 'https://as2.ftcdn.net/v2/jpg/03/24/27/77/1000_F_324277723_mXv92HVx29XZgPjGlGhgOlY9gWeQHjct.jpg',
      cta: {
        style: { backgroundColor: 'blue', color: 'white' },
        label: 'Learn More',
        linkToDetailsPage: '/details',
      },
    },
    {
      slide: 'https://t4.ftcdn.net/jpg/03/48/33/01/240_F_348330128_gbGvQ1OtIlz6FW0NwJmn7QofDDxNG3lm.jpg'
    },
    {
      slide: 'https://as1.ftcdn.net/v2/jpg/02/84/35/52/1000_F_284355244_IgKpFLvx3RdC9uQmiK5Tay5MJlu76nfF.jpg',
      cta: {
        style: { backgroundColor: 'orange', color: 'white' },
        label: 'Get Started',
        linkToDetailsPage: '/start',
      },
    },
  ];

  const mosaicData = [
    {
      poster: 'https://as2.ftcdn.net/v2/jpg/01/35/74/47/1000_F_135744710_kDH9h1lEFndThNT6bHOtshh9VQYeAtxk.jpg',
      size: 4,
      title: 'Movie 1',
      rating: '4.5',
      description: 'Description for Movie 1',
      moreInfo: { label: 'More Info', linkTo: '/more-info1' },
      book: { label: 'Book Now', linkTo: '/book-now1' },
    },
    {
      poster: 'https://t4.ftcdn.net/jpg/02/16/46/81/240_F_216468131_xa78oKcQsamgGnuQxpYcMJjVxeB3UM1H.jpg',
      size: 1,
      title: 'Movie 2',
      rating: '4.2',
      description: 'Description for Movie 2',
      moreInfo: { label: 'More Info', linkTo: '/more-info2' },
      book: { label: 'Book Now', linkTo: '/book-now2' },
    },
    // Add more items as needed
    {
      poster: 'https://t4.ftcdn.net/jpg/03/39/20/63/240_F_339206331_6HRRc8XzyNLQURYwNoYrd3d0sFfUpXAl.jpg',
      size: 1,
      title: 'Movie 3',
      rating: '4.8',
      description: 'Description for Movie 3',
      moreInfo: { label: 'More Info', linkTo: '/more-info3' },
      book: { label: 'Book Now', linkTo: '/book-now3' },
    },
    {
      poster: 'https://t4.ftcdn.net/jpg/04/06/35/19/240_F_406351930_oGq9NKLIuN9PrvM0vHNSu3nYtevbr7PW.jpg',
      size: 1,
      title: 'Movie 4',
      rating: '4.0',
      description: 'Description for Movie 4',
      moreInfo: { label: 'More Info', linkTo: '/more-info4' },
      book: { label: 'Book Now', linkTo: '/book-now4' },
    },
    {
      poster: 'https://t3.ftcdn.net/jpg/01/53/00/44/240_F_153004498_ZUgetPp7jBussiv66WVPHhefKHdg0D0Q.jpg',
      size: 1,
      title: 'Movie 5',
      rating: '3.9',
      description: 'Description for Movie 5',
      moreInfo: { label: 'More Info', linkTo: '/more-info5' },
      book: { label: 'Book Now', linkTo: '/book-now5' },
    },
    {
      poster: 'https://t3.ftcdn.net/jpg/02/58/74/90/240_F_258749064_9nWr9H9xg1uRqLrr58AOKHN9q1zJOX7O.jpg',
      size: 1,
      title: 'Movie 6',
      rating: '4.7',
      description: 'Description for Movie 6',
      moreInfo: { label: 'More Info', linkTo: '/more-info6' },
      book: { label: 'Book Now', linkTo: '/book-now6' },
    },
    {
      poster: 'https://t4.ftcdn.net/jpg/01/67/25/93/240_F_167259317_D1JqH6mVDJVn42JN5AniGCJ1AmvVfZlj.jpg',
      size: 1,
      title: 'Movie 7',
      rating: '4.6',
      description: 'Description for Movie 7',
      moreInfo: { label: 'More Info', linkTo: '/more-info7' },
      book: { label: 'Book Now', linkTo: '/book-now7' },
    },
    {
      poster: 'https://t3.ftcdn.net/jpg/01/89/13/42/240_F_189134251_3MANXRW6uWw4wg8QcA6fEltdFVNoPykI.jpg',
      size: 4,
      title: 'Movie 8',
      rating: '4.9',
      description: 'Description for Movie 8',
      moreInfo: { label: 'More Info', linkTo: '/more-info8' },
      book: { label: 'Book Now', linkTo: '/book-now8' },
    },
    {
      poster: 'https://t4.ftcdn.net/jpg/01/59/77/71/240_F_159777150_ApcxDTfBqJyKNH6jQrDWdDt8vOj6rXgs.jpg',
      size: 1,
      title: 'Movie 9',
      rating: '4.3',
      description: 'Description for Movie 9',
      moreInfo: { label: 'More Info', linkTo: '/more-info9' },
      book: { label: 'Book Now', linkTo: '/book-now9' },
    },
    {
      poster: 'https://t3.ftcdn.net/jpg/02/26/76/62/240_F_226766291_d0d258WCW1q7428KvjgcSh3YJoDmoGJI.jpg',
      size: 1,
      title: 'Movie 10',
      rating: '3.8',
      description: 'Description for Movie 10',
      moreInfo: { label: 'More Info', linkTo: '/more-info10' },
      book: { label: 'Book Now', linkTo: '/book-now10' },
    },
  ];
  

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <>
    <Text size="xl" weight="bold" variant="secondary"></Text>
    <Text size="xl" weight="bold" variant="secondary">
      Sample Text
    </Text>
    <br />
    <Input type="text" placeholder="Enter your text" label={"Text Input"} value={inputValue} onChange={handleInputChange} />
    <br />
    <Button text="Solid Button" variant="solid" size="m" onClick={handleClick} />
    <br />
    <Button text="Outline Button" variant="outline" size="m" onClick={handleClick} />
    <br />
    <Button text="Link Button" variant="link" size="m" onClick={handleClick} />
    <br />
    <Card
        title="Sample Card"
        date="2023-11-01"
        time="14:30"
        coverPhoto="https://as1.ftcdn.net/v2/jpg/01/73/37/16/1000_F_173371622_02A2qGqjhsJ5SWVhUPu0t9O9ezlfvF8l.jpg"
        description="This is a sample card component using the Design System."
      />
      <br />
      <Carousel slides={slides} />
      <br />
      <Mosaic items={mosaicData} />
  </>;
};

export default App;
