import React, { useState, ChangeEvent } from 'react';
import Input from './components/Input/Input'; // Import the Input component

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return <>
    <Input type="text" placeholder="Enter your text" label={"Text Input"} value={inputValue} onChange={handleInputChange} />
  </>;
};

export default App;
