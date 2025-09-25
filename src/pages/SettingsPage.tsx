// pages/SettingsPage.tsx - 设置页面
import React from 'react';
import { Card, Collapse, Switch, Slider, Select, Button } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Option } = Select;

const SettingsPage: React.FC = () => {
    return (
        <Card title="设置">
            <Collapse defaultActiveKey={['1', '2', '3']}>
                <Panel header="通用设置" key="1">
                    <div style={{ padding: '10px 0' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>主题</label>
                            <Select defaultValue="default" style={{ width: 200 }}>
                                <Option value="default">默认</Option>
                                <Option value="dark">深色</Option>
                                <Option value="light">浅色</Option>
                            </Select>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>语言</label>
                            <Select defaultValue="zh" style={{ width: 200 }}>
                                <Option value="zh">中文</Option>
                                <Option value="en">English</Option>
                                <Option value="ja">日本語</Option>
                            </Select>
                        </div>
                    </div>
                </Panel>
                <Panel header="AI设置" key="2">
                    <div style={{ padding: '10px 0' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>模型</label>
                            <Select defaultValue="gpt-4" style={{ width: 200 }}>
                                <Option value="gpt-3.5">GPT-3.5</Option>
                                <Option value="gpt-4">GPT-4</Option>
                                <Option value="claude">Claude</Option>
                            </Select>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>温度: 0.7</label>
                            <Slider defaultValue={0.7} min={0} max={1} step={0.1} />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>最大响应长度</label>
                            <Slider defaultValue={2048} min={256} max={4096} step={256} />
                        </div>
                    </div>
                </Panel>
                <Panel header="隐私与安全" key="3">
                    <div style={{ padding: '10px 0' }}>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>数据加密</label>
                            <Switch defaultChecked />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>匿名化处理</label>
                            <Switch />
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <div style={{ marginTop: '20px' }}>
                <Button type="primary" style={{ marginRight: '10px' }}>保存设置</Button>
                <Button>重置</Button>
            </div>
        </Card>
    );
};

export default SettingsPage;