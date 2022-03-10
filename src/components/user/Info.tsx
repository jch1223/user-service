import { Avatar, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

import Button from '../auth/common/Button';

function Info() {
  return (
    <Card
      cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
      actions={[<Button key="logOut">LogOut</Button>]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}

export default Info;
