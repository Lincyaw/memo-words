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

  const { run: rememberd } = useRequest(async (word: string) => {
    const w = await request<{ label: string }[]>('/api/v1/remember/' + word, {
      method: 'POST',
    });
    console.log(w);
  });

  const { run: forgot } = useRequest(async (word: string) => {
    const w = await request<{ label: string }[]>('/api/v1/forget/' + word, {
      method: 'POST',
    });
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
                    onClick={async () => {
                      console.log(item.label);
                      await forgot(item.label);
                      await getWords();
                    }}
                  >
                    <CloseOutlined />
                  </Button>,
                  <Button
                    onClick={async () => {
                      console.log(item.label);
                      await rememberd(item.label);
                      await getWords();
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
