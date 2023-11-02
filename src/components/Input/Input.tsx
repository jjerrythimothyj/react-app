import React, { FC, ChangeEvent, ReactNode } from 'react';
import Text from '../Text/Text'; // Import the Text component
import * as FEAAS from '@sitecore-feaas/clientside/react'

interface InputProps {
  type: 'text' | 'password' | 'number' | 'email';
  placeholder: string;
  label: ReactNode; // Accepts any ReactNode, including Text component
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, placeholder, label, value, onChange }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <Text size="xl" weight="bold" variant="primary">
        {label}
      </Text>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  );
};

FEAAS.registerComponent(Input, {
  name: 'My Input component',
  description: 'Description of my Input component',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58'
})

export default Input;
