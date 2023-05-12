import { AdminImage } from './admin-image';
import { SectionThreeHeader } from './header';

export function HeroSectionThree() {
  return (
    <div className="flex flex-col gap-6 items-center">
      <SectionThreeHeader />
      <div className="w-full">
        <AdminImage />
      </div>
    </div>
  );
}
