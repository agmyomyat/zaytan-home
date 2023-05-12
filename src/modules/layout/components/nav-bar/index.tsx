import { createStyles } from '@mantine/core';
interface NavProps {
  children: React.ReactNode;
}
import tw from 'twin.macro';
export const NavBar: React.FC<NavProps> & {
  LeftSide: React.FC<NavProps>;
  RightSide: React.FC<NavProps>;
} = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.bgContainer}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};
const LeftSideContent: React.FC<NavProps> = ({ children }) => {
  const { classes } = useStyles();
  return <div className={classes.leftSideContainer}>{children}</div>;
};
const RightSideContent: React.FC<NavProps> = ({ children }) => {
  const { classes } = useStyles();
  return <div className={classes.rightSideContainer}>{children}</div>;
};
NavBar.LeftSide = LeftSideContent;
NavBar.RightSide = RightSideContent;
const useStyles = createStyles(() => ({
  bgContainer: tw`bg-white  border-gray-100  border-0 border-solid border-b-[2px]`,
  container: tw`flex justify-between p-4 xl:mx-48`,
  leftSideContainer: tw`flex gap-3 items-center`,
  rightSideContainer: tw`flex gap-5 items-center `,
}));
