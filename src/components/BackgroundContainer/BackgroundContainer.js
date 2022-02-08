import Hero from '../Hero/Hero';

import DesktopLoggedIn from './DesktopLoggedIn';
import DesktopMain from './DesktopMain';
import MobileLoggedIn from './MobileLoggedIn';
import MobileMain from './MobileMain';
import TabletLoggedIn from './TabletLoggedIn';
import TabletMain from './TabletMain';

export default function BackgroundContainer() {
  return (
    <>
      <Hero />
      <MobileMain />
      {/* <MobileLoggedIn /> */}
      <TabletMain />
      {/* <TabletLoggedIn /> */}
      <DesktopMain />
      {/*  <DesktopLoggedIn /> */}
    </>
  );
}
