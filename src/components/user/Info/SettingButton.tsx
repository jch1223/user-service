import { Link } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

import { paths } from '../../../pages/routes/path';

function SettingButton() {
  return (
    <Tooltip title="change password" arrowPointAtCenter>
      <Link to={paths.setting.path}>
        <SettingOutlined />
      </Link>
    </Tooltip>
  );
}

export default SettingButton;
