import { SignUpform } from '../components/sign-up/form';
import { Title } from '@mantine/core';
import { signUpRequest } from '../sign-up.request';
import { useState } from 'react';
import FormSuccessModal from '../components/sign-up/modals/form-success-modal';
import { useRouter } from 'next/router';
type MODAL_TYPE = 'success' | 'error' | false;
export function SignUpTemplatePage() {
  const [submitting, setSubmitting] = useState(false);
  const [openModal, setOpenModal] = useState<MODAL_TYPE>(false);
  const router = useRouter();

  return (
    <div className="py-16 relative w-full bg-gray-100 h-screen">
      <div className=" flex flex-col mt-10 bg-white mx-auto items-center w-[500px] max-w-full rounded-xl p-5 shadow-xl">
        <Title fz={20} fw={700} mb={20} className=" text-cyan-900 self-start">
          Provide your business information
        </Title>
        <SignUpform
          emailRef={router.query.email_ref as string}
          submit={(values) => {
            setSubmitting(true);
            signUpRequest(values)
              .then((res) => {
                if (res.status === 200) {
                  setOpenModal('success');
                  setSubmitting(false);
                  return;
                }
                setOpenModal('error');
                setSubmitting(false);
              })
              .catch((e) => {
                setSubmitting(false);
                setOpenModal('error');
              });
          }}
          submitting={submitting}
        />
      </div>
      <FormSuccessModal
        opened={openModal === 'success'}
        close={() => setOpenModal(false)}
      />
    </div>
  );
}
