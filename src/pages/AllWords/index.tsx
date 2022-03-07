import { List, Row, Col, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useRequest, request } from 'umi';
import {
  AppleOutlined,
  CheckOutlined,
  CloseOutlined,
  AudioOutlined,
} from '@ant-design/icons';
const AllWords = () => {
  const [data, setData] = useState<{ label: string }[]>([
    {
      label: 'Ant Design Title 1',
    },
    {
      label: 'Ant Design Title 2',
    },
    {
      label: 'Ant Design Title 3',
    },
    {
      label: 'Ant Design Title 4',
    },
  ]);
  const { run: getWords } = useRequest(async () => {
    const w = await request<{ label: string }[]>('/api/v1/all', {
      method: 'GET',
    });
    setData(w);
    console.log(w);
  });

  return (
    <>
      <Row gutter={24} justify="center">
        <Col span={24}>
          <Button block size="large" onClick={getWords}>
            点击以获得数据
          </Button>
        </Col>
        <Col xs={22} sm={22} md={18} lg={16} xl={12}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button
                    onClick={() => {
                      console.log(item.label);
                    }}
                  >
                    删除
                  </Button>,
                  <Button
                    onClick={() => {
                      console.log(item.label);
                    }}
                  >
                    <CloseOutlined />
                  </Button>,
                  <Button
                    onClick={() => {
                      console.log(item.label);
                    }}
                  >
                    <CheckOutlined />
                  </Button>,
                ]}
                key={item.label}
              >
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.label}</a>}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default AllWords;
