import React, { useState, ChangeEvent } from 'react';
import Input from './components/Input/Input'; // Import the Input component
import Button from './components/Button/Button'; // Import the Button component
import Text from './components/Text/Text'; // Import the Text component
import Card from './components/Card/Card'; // Import the Card component
import Carousel from './components/Carousel/Carousel' // Import the Carousel component

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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <>
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
  </>;
};

export default App;
