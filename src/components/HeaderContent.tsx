// components/HeaderContent.tsx - 头部内容组件
import React from 'react';
import { Button, Avatar, Space, Tooltip } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';

export const HeaderContent: React.FC = () => {
    return (
        <Space>
            <Tooltip title="通知">
                <Button shape="circle" icon={<MailOutlined />} style={{ marginRight: '16px' }} />
            </Tooltip>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#1890ff', marginRight: '8px' }} />
                <span>管理员</span>
            </div>
        </Space>
    );
};