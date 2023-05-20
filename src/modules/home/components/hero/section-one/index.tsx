import { NextRouter } from 'next/router';
import { SectionOneHeader } from './header';
import { SectionOneInput } from './input';
import { MyanmarMap } from '@/fundanmentals/icons/myanmar-map/myanmar-map';
import { isEmail } from '@/utils/email-validation';
import { useState } from 'react';
export function HeroSectionOne(props: { router: NextRouter }) {
  const [inputError, setInputError] = useState('');
  return (
    <div className="w-full bg-orange-400 pt-10 pb-20 overflow-hidden">
      <div className="justify-center w-full gap-36 flex lg:flex-row">
        <div className="flex flex-col xl:ml-20 xl:mt-60  mt-16 ">
          <div className="xl:w-[600px] w-full  mx-4">
            <SectionOneHeader />
          </div>
          <div className="mt-10 mx-5 ">
            <SectionOneInput
              error={inputError}
              buttonSubmit={(value) => {
                if (!value || !isEmail(value)) {
                  return setInputError('Please enter a valid email address');
                }
                props.router.push('/signup?email_ref=' + value);
              }}
            />
          </div>
        </div>
        <div className="w-auto xl:block hidden mt-10">
          <MyanmarMap className=" w-full h-[800px]" fill="#000000" />
        </div>
      </div>
    </div>
  );
}
