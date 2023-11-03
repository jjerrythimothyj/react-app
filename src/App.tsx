import React, { useState, ChangeEvent } from 'react';
import Input from './components/Input/Input'; // Import the Input component
import Button from './components/Button/Button'; // Import the Button component
import Text from './components/Text/Text'; // Import the Text component
import Card from './components/Card/Card'; // Import the Card component

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

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
        coverPhoto="https://example.com/sample-cover.jpg"
        description="This is a sample card component using the Design System."
      />
  </>;
};

export default App;
