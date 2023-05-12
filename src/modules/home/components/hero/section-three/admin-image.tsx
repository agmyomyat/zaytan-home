import { AspectRatio, Image, Paper } from '@mantine/core';

export function AdminImage() {
  return (
    <AspectRatio ratio={963 / 665} maw={1000} mx="auto">
      <Paper shadow="lg" p="xs" withBorder>
        <Image src="./admin-order-page.png" alt="admin" />
      </Paper>
    </AspectRatio>
  );
}
