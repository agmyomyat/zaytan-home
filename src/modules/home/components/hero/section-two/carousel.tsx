import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(1000),
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
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <Text className={classes.category} size="xs">
        {category}
      </Text>
    </Paper>
  );
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
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
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
