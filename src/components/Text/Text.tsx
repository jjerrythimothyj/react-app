import React, { FC, ReactNode } from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react'

interface TextProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
  weight?: 'light' | 'bold';
  variant?: 'primary' | 'secondary';
  children?: ReactNode;
}

const Text: FC<TextProps> = ({ size, weight, variant, children }) => {
  let fontSize: string;
  let fontWeight: string;
  let color: string;

  // Define font sizes based on size prop
  switch (size) {
    case 'xl':
      fontSize = '24px';
      break;
    case '2xl':
      fontSize = '28px';
      break;
    case '3xl':
      fontSize = '32px';
      break;
    default:
      fontSize = '16px'; // Default font size
  }

  // Define font weights based on weight prop
  switch (weight) {
    case 'light':
      fontWeight = '300';
      break;
    case 'bold':
      fontWeight = '700';
      break;
    default:
      fontWeight = '400'; // Default font weight
  }

  // Define colors based on variant prop
  switch (variant) {
    case 'primary':
      color = '#007bff'; // Primary color
      break;
    case 'secondary':
      color = '#6c757d'; // Secondary color
      break;
    default:
      color = '#000000'; // Default color
  }

  return (
    <span style={{ fontSize, fontWeight, color }}>
      {children ?? "Default Content"}
    </span>
  );
};

FEAAS.registerComponent(Text, {
  name: 'name',
  title: 'Name',
  description: 'Description of my Text component',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'Builder',
  properties: {
    size: {
      type: 'string',
      title: 'Size'
    },
    weight: {
      type: 'string',
      title: 'Weight'
    },
    variant: {
      type: 'string',
      title: 'Variant'
    },
    children: {
      type: 'string',
      title: 'Content'
    },
  }
})


export default Text;
