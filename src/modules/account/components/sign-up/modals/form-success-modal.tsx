import { CheckIcon, Modal, Title } from '@mantine/core';
export interface FormSuccessModalProps {
  opened: boolean;
  close: () => void;
}
export default function FormSuccessModal(props: FormSuccessModalProps) {
  return (
    <>
      <Modal
        classNames={{ inner: 'p-0', close: 'self-start' }}
        opened={props.opened}
        onClose={props.close}
        centered
        title={
          <div className="flex flex-col items-center gap-3 sm:px-12">
            <div className=" w-12 h-12 bg-green-200 rounded-full flex justify-center items-center">
              <CheckIcon color="#01910a" width={30} height={30} />
            </div>
            <Title order={4} fw={300}>
              Your form was successfully submitted
            </Title>
          </div>
        }
      ></Modal>
    </>
  );
}
