import { CrossIcon } from '@/fundanmentals/icons/cross-icon';
import { Modal, Title } from '@mantine/core';
export interface FormErrorModalProps {
  opened: boolean;
  close: () => void;
}
export default function FormErrorModal(props: FormErrorModalProps) {
  return (
    <>
      <Modal
        classNames={{ inner: 'p-0', close: 'self-start' }}
        opened={props.opened}
        onClose={props.close}
        centered
        title={
          <div className="flex flex-col items-center gap-3 sm:px-12">
            <div className=" w-12 h-12 bg-red-400 rounded-full flex justify-center items-center">
              <CrossIcon size={20} fill="#b00505" />
            </div>
            <Title order={4} fw={300} className="text-center">
              Error occured while submitting the form. Please try again.
            </Title>
          </div>
        }
      ></Modal>
    </>
  );
}
