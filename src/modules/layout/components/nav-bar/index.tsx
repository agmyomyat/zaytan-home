import { createStyles } from '@mantine/core';
interface NavProps {
  children: React.ReactNode;
}
export const NavBar: React.FC<NavProps> & {
  LeftSide: React.FC<NavProps>;
  RightSide: React.FC<NavProps>;
} = ({ children }) => {
  return (
    <div className={classes.bgContainer}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};
const LeftSideContent: React.FC<NavProps> = ({ children }) => {
  return <div className={classes.leftSideContainer}>{children}</div>;
};
const RightSideContent: React.FC<NavProps> = ({ children }) => {
  return <div className={classes.rightSideContainer}>{children}</div>;
};
NavBar.LeftSide = LeftSideContent;
NavBar.RightSide = RightSideContent;
const classes = {
  bgContainer: `bg-white  border-gray-100  border-0 border-solid border-b-[2px]`,
  container: `flex justify-between p-4 xl:mx-48`,
  leftSideContainer: `flex gap-3 items-center`,
  rightSideContainer: `flex gap-5 items-center `,
};
