import { Image } from '@mantine/core';
export function BankLogo(props: { path: string; alt: string }) {
  return (
    <Image maw={240} mx="auto" radius="md" src={props.path} alt={props.alt} />
  );
}
