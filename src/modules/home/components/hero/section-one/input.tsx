import { Button, TextInput, TextInputProps } from '@mantine/core';
import { useState } from 'react';
type Props = {
  buttonSubmit: (value: string) => void;
} & TextInputProps;
export function SectionOneInput(props: Props) {
  const [state, setState] = useState('');
  return (
    <div className="flex gap-2 flex-col sm:flex-row">
      <TextInput
        classNames={{
          root: ` w-full sm:w-80 `,
          input: `py-5 focus-within:border-black`,
        }}
        placeholder="Enter your email"
        onChange={(e) => setState(e.target.value)}
      />
      <Button
        className="bg-black hover:!bg-gray-700 rounded-lg max-w-full"
        size={'md'}
        onClick={() => props.buttonSubmit(state)}
      >
        Join now
      </Button>
    </div>
  );
}
