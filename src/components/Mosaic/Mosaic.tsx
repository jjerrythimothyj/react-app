import React, { FC } from 'react';
import Text from '../Text/Text'; // Import the Text component
import Button from '../Button/Button'; // Import the Button component
import * as FEAAS from '@sitecore-feaas/clientside/react'
import './Mosaic.css'; // Import custom CSS for the Carousel (create this file) 

interface MosaicItem {
  poster: string;
  size: number;
  title: string;
  rating: string;
  description: string;
  moreInfo: {
    label: string;
    linkTo: string;
  };
  book: {
    label: string;
    linkTo: string;
  };
}

interface MosaicProps {
  items: MosaicItem[];
}

const Mosaic: FC<MosaicProps> = ({ items }) => {
  return (
    <div className="mosaic-container">
      {items.map((item, index) => (
        <div key={index} className={`mosaic-item size-${item.size}`}>
          <img src={item.poster} alt={`Poster ${index}`} className="poster" />
          <div className="content">
            <Text size="xl" weight="bold" variant="primary">
              {item.title}
            </Text>
            <Text size="m" variant="secondary">
              Rating: {item.rating}
            </Text>
            <Text size="m" variant="secondary">
              {item.description}
            </Text>
            <div className="buttons">
              <Button text={item.moreInfo.label} variant="solid" size="m" onClick={() => {}} />
              <Button text={item.book.label} variant="solid" size="m" onClick={() => {}} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

FEAAS.registerComponent(Mosaic, {
  name: 'My Mosaic component',
  description: 'Description of my Mosaic component',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58'
})

export default Mosaic;
