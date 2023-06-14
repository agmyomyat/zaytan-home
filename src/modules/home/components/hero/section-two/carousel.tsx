import { Carousel } from '@mantine/carousel';
import {
  Image,
  createStyles,
  Paper,
  Text,
  rem,
  AspectRatio,
} from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useRef } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  category: {
    color: theme.black,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, category }: CardProps) {
  const { classes } = useStyles();
  return <Image className={classes.card} src={image} alt="Panda" />;
}

const data = [
  {
    image: './isure-demo-site.png',
    title: 'isure demo',
    category: 'Demo',
  },
  {
    image: './hnm-demo-site.png',
    title: 'hnm demo',
    category: 'Demo',
  },
];
export function SectionTwoCarousel() {
  const ref = useRef(Autoplay({ delay: 4000 }));
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      loop
      plugins={[ref.current]}
      className="w-full border-solid border-[1px] border-gray-200"
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}
