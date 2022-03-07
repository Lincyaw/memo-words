import React from 'react';
import { Tabs, Input, Row, Col, Tooltip, Button } from 'antd';
import {
  AppleOutlined,
  AndroidOutlined,
  SearchOutlined,
  AudioOutlined,
} from '@ant-design/icons';
import Word from '../WordList';
import AllWords from '../AllWords';
const { TabPane } = Tabs;

const App = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    size="middle"
    tabPosition="top"
    tabBarStyle={{ border: 'solid' }}
  >
    <TabPane
      tab={
        <span>
          <AppleOutlined />
          Tab 1
        </span>
      }
      key="1"
    >
      <Word/>
    </TabPane>
    <TabPane
      tab={
        <span>
          <AndroidOutlined />
          Tab 2
        </span>
      }
      key="2"
    >
      <AllWords/>
    </TabPane>
    
  </Tabs>
);

export default App;
