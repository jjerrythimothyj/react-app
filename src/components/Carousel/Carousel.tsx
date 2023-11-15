import React, { FC } from 'react';
import Slider from 'react-slick';
import * as FEAAS from '@sitecore-feaas/clientside/react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Import custom CSS for the Carousel (create this file)

interface CtaProps {
  style?: React.CSSProperties;
  label: string;
  linkToDetailsPage: string;
}

interface CarouselSlide {
  slide: string;
  cta?: CtaProps;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <img src={slide.slide} alt={`Slide ${index}`} className="carousel-image" />
          {slide.cta && (
            <a href={slide.cta.linkToDetailsPage} style={{ ...slide.cta.style }} className="carousel-label">
              {slide.cta.label}
            </a>
          )}
        </div>
      ))}
    </Slider>
  );
};

FEAAS.registerComponent(Carousel, {
  name: 'My Carousel component',
  description: 'Description of my Carousel component',
  thumbnail: 'https://mss-p-006-delivery.stylelabs.cloud/api/public/content/3997aaa0d8be4eb789f3b1541bd95c58',
  group: 'Builder',
  type: "object",
  properties: {
    slides: {
      type: "array",
      title: "Slides",
      items: {
        type: "object",
        properties: {
          slide: {
            type: 'string',
            title: 'Slide'
          },
          cta: {
            type: "object",
            title: 'CTA',
            properties: {
              style: {
                type: 'object',
                title: 'Style',
                properties: {
                  backgroundColor: {
                    type: 'string',
                    title: 'Background color'
                  },
                  color: {
                    type: 'string',
                    title: 'Color'
                  }
                }
              },
              label: {
                type: 'string',
                title: 'Label'
              },
              linkToDetailsPage: {
                type: 'string',
                title: 'Link to details page'
              }
            }
          }
        }
      }
    }
  }
})

export default Carousel;
