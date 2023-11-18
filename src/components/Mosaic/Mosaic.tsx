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
  name: 'mosaic',
  title: 'Mosaic',
  description: 'Description of my Mosaic component',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'Builder',
  type: "object",
  properties: {
    items: {
      type: "array",
      title: "Items",
      items: {
        type: "object",
        properties: {
          poster: {
            type: 'string',
            title: 'Poster'
          },
          size: {
            type: 'number',
            title: 'Size'
          },
          title: {
            type: 'string',
            title: 'Title'
          },
          rating: {
            type: 'string',
            title: 'Rating'
          },
          description: {
            type: 'string',
            title: 'Description'
          },
          moreInfo: {
            type: "object",
            title: 'More info',
            properties: {
              label: {
                type: 'string',
                title: 'Label'
              },
              linkTo: {
                type: 'string',
                title: 'Link to'
              },
            }
          },
          book: {
            type: "object",
            title: 'Book',
            properties: {
              label: {
                type: 'string',
                title: 'Label'
              },
              linkTo: {
                type: 'string',
                title: 'Link to'
              },
            }
          }
        }
      }
    },
  }
})

export default Mosaic;
