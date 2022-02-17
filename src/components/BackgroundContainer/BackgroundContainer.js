import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import DesktopLoggedIn from './DesktopLoggedIn';
import DesktopMain from './DesktopMain';
import MobileLoggedIn from './MobileLoggedIn';
import MobileMain from './MobileMain';
import TabletLoggedIn from './TabletLoggedIn';
import TabletMain from './TabletMain';

export default function BackgroundContainer() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <>
          <MobileLoggedIn />
          <TabletLoggedIn />
          <DesktopLoggedIn />
        </>
      ) : (
        <>
          {/* <Hero /> */}
          <MobileMain />
          <TabletMain />
          <DesktopMain />
        </>
      )}
    </>
  );
}
