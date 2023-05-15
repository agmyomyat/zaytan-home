import ZayTanIcon from '@/fundanmentals/icons/zaytan-icon';
import {
  Text,
  createStyles,
  Container,
  Group,
  ActionIcon,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div className="flex gap-2">
          <ZayTanIcon size={28} />
          <Text>© 2023 Zaytan™</Text>
        </div>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            {/* <IconBrandTwitter size="3rem" stroke={1.5} /> */}
          </ActionIcon>
          <ActionIcon size="lg">
            {/* <IconBrandFacebook size="3rem" stroke={1.5} /> */}
          </ActionIcon>
          <ActionIcon size="lg">
            {/* <IconBrandYoutube size="3rem" stroke={1.5} /> */}
          </ActionIcon>
          <ActionIcon size="lg">
            {/* <IconBrandInstagram size="3rem" stroke={1.5} /> */}
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
