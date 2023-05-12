import { ReactNode } from 'react';
import { DesktopNav } from '../components/desktop-nav';
import { useMediaQuery } from '@mantine/hooks';
import { MobileNav } from '../components/mobile-nav';
import { Footer } from '../components/footer';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <div className="fixed top-0 w-full z-10">
        {matches ? <DesktopNav /> : <MobileNav />}
      </div>
      {children}
      <div className="pb-5">
        <Footer />
      </div>
    </>
  );
};
