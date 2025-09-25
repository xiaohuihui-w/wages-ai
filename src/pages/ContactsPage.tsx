// pages/ContactsPage.tsx - 联系人页面
import React, { useState } from 'react';
import { Card, List, Avatar, Button } from 'antd';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';

// 定义联系人类型
interface Contact {
    id: number;
    name: string;
    role: string;
    email: string;
}

const ContactsPage: React.FC = () => {
    const [contacts] = useState<Contact[]>([
        { id: 1, name: '张三', role: '项目经理', email: 'zhang@example.com' },
        { id: 2, name: '李四', role: '设计师', email: 'li@example.com' },
        { id: 3, name: '王五', role: '开发工程师', email: 'wang@example.com' },
        { id: 4, name: '赵六', role: '产品经理', email: 'zhao@example.com' },
        { id: 5, name: '钱七', role: '测试工程师', email: 'qian@example.com' }
    ]);

    return (
        <Card title="联系人">
            <List
                dataSource={contacts}
                renderItem={item => (
                    <List.Item
                        actions={[<Button type="link">发送消息</Button>]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar icon={<UserOutlined />} style={{ backgroundColor: '#1890ff' }} />}
                            title={item.name}
                            description={`${item.role} • ${item.email}`}
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default ContactsPage;