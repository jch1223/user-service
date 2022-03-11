import { Link } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

function ChangePassword() {
  return (
    <Tooltip title="change password" arrowPointAtCenter>
      <Link to={'/setting'}>
        <SettingOutlined />
      </Link>
    </Tooltip>
  );
}

export default ChangePassword;
