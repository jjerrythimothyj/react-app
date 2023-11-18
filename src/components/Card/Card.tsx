import React, { FC } from 'react';
import Text from '../Text/Text'; // Import the Text component from your design system
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import MoreVertIcon from Material-UI
import * as FEAAS from '@sitecore-feaas/clientside/react'

interface CardProps {
  title: string;
  date: string;
  time: string;
  coverPhoto: string; // URL to an online jpeg or png file
  description: string;
}

const Card: FC<CardProps> = ({ title, date, time, coverPhoto, description }) => {
  const cardStyle: React.CSSProperties = {
    width: '300px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '16px',
  };

  const coverStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    backgroundImage: `url(${coverPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const headerStyle: React.CSSProperties = {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  };

  return (
    <div style={cardStyle}>
      <div style={coverStyle}></div>
      <div style={headerStyle}>
        <div>
          <Text size="xl" weight="bold" variant="primary">
            {title}
          </Text>
          <div>
            <Text size="s" variant="secondary">
              {date}
            </Text>
            <br />
            <Text size="s" variant="secondary">
              {time}
            </Text>
          </div>
        </div>
        <MoreVertIcon style={{ cursor: 'pointer' }} />
      </div>
      <div style={{ padding: '16px' }}>
        <Text size="m" variant="primary">
          {description}
        </Text>
      </div>
    </div>
  );
};

FEAAS.registerComponent(Card, {
  name: 'card',
  title: 'Card',
  description: 'Description of my Card component',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'Builder',
  type: "object",
  properties: {
    title: {
      type: 'string',
      title: 'Title'
    },
    date: {
      type: 'string',
      title: 'Date'
    },
    time: {
      type: 'string',
      title: 'Time'
    },
    coverPhoto: {
      type: 'string',
      title: 'Cover Photo'
    },
    description: {
      type: 'string',
      title: 'Description'
    }
  }
})

export default Card;
