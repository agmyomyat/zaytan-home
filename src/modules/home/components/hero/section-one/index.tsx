import { createStyles } from '@mantine/core';
import tw from 'twin.macro';
import { SectionOneHeader } from './header';
import { SectionOneInput } from './input';
import { MyanmarMap } from '@/fundanmentals/icons/types/myanmar-map/myanmar-map';
export function HeroSectionOne() {
  const { classes } = useStyles();
  return (
    <div className={classes.bgContainer}>
      <div className="justify-center w-full gap-36 flex lg:flex-row">
        <div className={classes.leftSideContainer}>
          <div className={classes.HeaderContainer}>
            <SectionOneHeader />
          </div>
          <div className="mt-10 mx-5 ">
            <SectionOneInput onClick={(value) => alert(value)} />
          </div>
        </div>
        <div className="w-auto xl:block hidden mt-10">
          <MyanmarMap className=" w-full h-[800px]" fill="#000000" />
        </div>
      </div>
    </div>
  );
}
const useStyles = createStyles(() => ({
  bgContainer: tw`w-full bg-gradient-to-br pt-10 pb-20 from-orange-500 to-orange-300 overflow-hidden`,
  leftSideContainer: tw`flex flex-col xl:ml-20 xl:mt-60  mt-16 `,
  HeaderContainer: tw`xl:w-[600px] w-full  mx-4`,
}));
