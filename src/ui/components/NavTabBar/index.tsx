import { useNavigate } from '@/ui/pages/MainRoute';
import { useUnreadAppSummary } from '@/ui/state/accounts/hooks';
import { TabOption } from '@/ui/state/global/reducer';
import { colors } from '@/ui/theme/colors';

import { BaseView } from '../BaseView';
import { Column } from '../Column';
import { Grid } from '../Grid';
import { Icon, IconTypes } from '../Icon';

export function NavTabBar({ tab }: { tab: TabOption }) {
  return (
    <Grid columns={3} style={{ width: '100%', height: '67.5px', backgroundColor: colors.bg2 }}>
      <TabButton tabName="home" icon="unisat" isActive={tab === 'home'} />
      <TabButton tabName="discover" icon="compass" isActive={tab === 'discover'} />
      <TabButton tabName="settings" icon="settings" isActive={tab === 'settings'} />
    </Grid>
  );
}

function TabButton({ tabName, icon, isActive }: { tabName: TabOption; icon: IconTypes; isActive: boolean }) {
  const navigate = useNavigate();
  const unreadApp = useUnreadAppSummary();
  return (
    <Column
      justifyCenter
      itemsCenter
      onClick={(e) => {
        if (tabName === 'home') {
          navigate('MainScreen');
        } else if (tabName === 'discover') {
          navigate('DiscoverTabScreen');
        } else if (tabName === 'settings') {
          navigate('SettingsTabScreen');
        }
      }}>
      <Icon size={20} icon={icon} color={isActive ? 'white' : 'white_muted'} />
      <BaseView style={{ position: 'relative' }}>
        {tabName === 'discover' && unreadApp && (
          <BaseView
            style={{
              position: 'absolute',
              bottom: 20,
              left: 5,
              width: 5,
              height: 5,
              backgroundColor: 'red',
              borderRadius: '50%'
            }}></BaseView>
        )}
      </BaseView>
    </Column>
  );
}
