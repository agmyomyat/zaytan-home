import { isLinkValid } from '@/utils/link-validation';
import { TextInput, Button, Group, Box, NativeSelect } from '@mantine/core';
import { useForm } from '@mantine/form';
import { SignUpForm } from '../../sign-up.interface';
import { ZAYTAN_PLANS } from './sign-up.constants';
export function SignUpform(props: {
  submit: (values: SignUpForm) => void;
  submitting: boolean;
}) {
  const form = useForm<SignUpForm>({
    initialValues: {
      email: '',
      merchant_name: '',
      phone_number: '',
      page_link: '',
      shop_name: '',
      plan: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone_number: (value) =>
        value.length !== 11 || value[0] != '0' ? 'Invalid phone number' : null,
      merchant_name: (value) => (value.length < 1 ? 'Name is required' : null),
      page_link: (value) => (!isLinkValid(value) ? 'Invalid page link' : null),
      shop_name: (value) =>
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
          {...form.getInputProps('merchant_name')}
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
          {...form.getInputProps('phone_number')}
        />
        <TextInput
          withAsterisk
          classNames={{ input: 'focus-within:border-sencondary' }}
          label="Your page name"
          placeholder="H&M"
          {...form.getInputProps('shop_name')}
        />
        <TextInput
          withAsterisk
          classNames={{ input: 'focus-within:border-sencondary' }}
          label="Your page link"
          placeholder="https://www.facebook.com/H&M"
          {...form.getInputProps('page_link')}
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
