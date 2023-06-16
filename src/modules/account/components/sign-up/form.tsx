import { isLinkValid } from '@/utils/link-validation';
import { TextInput, Button, Group, Box, NativeSelect } from '@mantine/core';
import { useForm } from '@mantine/form';
import { SignUpForm } from '../../sign-up.interface';
import { ZAYTAN_PLANS } from './sign-up.constants';
export function SignUpform(props: {
  submit: (values: SignUpForm) => void;
  submitting: boolean;
  emailRef: string | undefined;
}) {
  const form = useForm<SignUpForm>({
    initialValues: {
      email: props.emailRef ?? '',
      merchantName: '',
      phoneNumber: '',
      pageLink: '',
      pageName: '',
      plan: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phoneNumber: (value) =>
        value.length !== 11 || value[0] != '0' ? 'Invalid phone number' : null,
      merchantName: (value) => (value.length < 1 ? 'Name is required' : null),
      pageLink: (value) => (!isLinkValid(value) ? 'Invalid page link' : null),
      pageName: (value) =>
        value.length < 1 ? 'Your shop name is required' : null,
    },
  });

  return (
    <Box maw={'100%'} w={500}>
      <form
        className="flex flex-col gap-3"
        onSubmit={form.onSubmit((values) => {
          form.reset();
          props.submit(values);
        })}
      >
        <TextInput
          withAsterisk
          classNames={{ input: 'focus-within:border-sencondary' }}
          label="Your Name"
          placeholder="Aung Aung"
          {...form.getInputProps('merchantName')}
        />
        <TextInput
          withAsterisk
          classNames={{ input: 'focus-within:border-sencondary' }}
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          classNames={{
            input: 'focus-within:border-sencondary',
          }}
          label="Phone Number"
          placeholder="0977xxxxxxx"
          {...form.getInputProps('phoneNumber')}
        />
        <TextInput
          withAsterisk
          classNames={{ input: 'focus-within:border-sencondary' }}
          label="Your page name"
          placeholder="H&M"
          {...form.getInputProps('pageName')}
        />
        <TextInput
          withAsterisk
          classNames={{ input: 'focus-within:border-sencondary' }}
          label="Your page link"
          placeholder="https://www.facebook.com/H&M"
          {...form.getInputProps('pageLink')}
        />
        <NativeSelect
          data={ZAYTAN_PLANS}
          label="what plan are you interest in?"
          withAsterisk
          classNames={{ input: 'focus-within:border-sencondary' }}
          {...form.getInputProps('plan')}
        />
        <Group position="right" mt="md">
          <Button
            loading={props.submitting}
            disabled={props.submitting}
            color="dark"
            type="submit"
          >
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}
