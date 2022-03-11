import { Avatar, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

import { UserInfoSuccess } from '../../../api/types';

import LogOut from '../../auth/LogOut';
import SettingButton from './SettingButton';

interface UserInfoProps {
  userInfo: UserInfoSuccess | null;
  isLoading?: boolean;
}

function Info({ userInfo, isLoading }: UserInfoProps) {
  return (
    <Card actions={[<LogOut key="logOut" />, <SettingButton key="setting" />]} loading={isLoading}>
      <Meta
        avatar={<Avatar size={64} src={userInfo?.profileImage} alt="profileImage" />}
        title={userInfo?.name}
        description={userInfo?.email}
      />
    </Card>
  );
}

export default Info;
