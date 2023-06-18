interface NavProps {
  children: React.ReactNode;
}
export const NavBarContainer: React.FC<NavProps> & {
  LeftSide: React.FC<NavProps>;
  RightSide: React.FC<NavProps>;
} = ({ children }) => {
  return (
    <div className={twClasses.bgContainer}>
      <div className={twClasses.container}>{children}</div>
    </div>
  );
};
const LeftSideContent: React.FC<NavProps> = ({ children }) => {
  return <div className={twClasses.leftSideContainer}>{children}</div>;
};
const RightSideContent: React.FC<NavProps> = ({ children }) => {
  return <div className={twClasses.rightSideContainer}>{children}</div>;
};
NavBarContainer.LeftSide = LeftSideContent;
NavBarContainer.RightSide = RightSideContent;
const twClasses = {
  bgContainer: `bg-white opacity-80 border-gray-400 border-0 border-solid border-b-[1px]`,
  container: `flex justify-between p-4 xl:mx-48`,
  leftSideContainer: `flex gap-3 items-center`,
  rightSideContainer: `flex gap-5 items-center `,
};
