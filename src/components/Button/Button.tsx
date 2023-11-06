import React, { FC, ReactNode } from 'react';
import Text from '../Text/Text'; // Import the Text component from your design system
import * as FEAAS from '@sitecore-feaas/clientside/react'

interface ButtonProps {
  text: string;
  variant: 'outline' | 'solid' | 'link';
  size: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, variant, size, onClick }) => {
  let buttonStyle: React.CSSProperties = {
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  };

  // Apply styles based on variant
  switch (variant) {
    case 'outline':
      buttonStyle = { ...buttonStyle, border: '2px solid #007bff', color: '#007bff' };
      break;
    case 'solid':
      buttonStyle = { ...buttonStyle, backgroundColor: '#007bff', color: '#fff' };
      break;
    case 'link':
      buttonStyle = { ...buttonStyle, backgroundColor: 'transparent', color: '#007bff' };
      break;
    default:
      break;
  }

  // Apply styles based on size
  switch (size) {
    case 'xs':
      buttonStyle = { ...buttonStyle, fontSize: '12px' };
      break;
    case 's':
      buttonStyle = { ...buttonStyle, fontSize: '14px' };
      break;
    case 'm':
      buttonStyle = { ...buttonStyle, fontSize: '16px' };
      break;
    case 'l':
      buttonStyle = { ...buttonStyle, fontSize: '18px' };
      break;
    case 'xl':
      buttonStyle = { ...buttonStyle, fontSize: '20px' };
      break;
    case '2xl':
      buttonStyle = { ...buttonStyle, fontSize: '24px' };
      break;
    case '3xl':
      buttonStyle = { ...buttonStyle, fontSize: '28px' };
      break;
    default:
      break;
  }

  return (
    <button style={buttonStyle} onClick={onClick}>
      <Text size={size}>
        {text}
      </Text>
    </button>
  );
};

FEAAS.registerComponent(Button, {
  name: 'My Button component',
  description: 'Description of my Button component',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'Builder',
  properties: {
    text: {
      type: 'string',
      title: 'Text'
    },
    variant: {
      type: 'string',
      title: 'Variant'
    },
    size: {
      type: 'string',
      title: 'Size'
    }
  }
})

export default Button;
