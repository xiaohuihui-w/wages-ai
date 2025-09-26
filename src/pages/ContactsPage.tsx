// pages/ContactsPage.tsx - 联系人页面
import React, { useState } from 'react';
import { Card, List, Avatar, Button } from 'antd';
import { TeamOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';

// 定义联系人类型
interface Contact {
    id: number;
    name: string;
    role: string;
    email: string;
    status: 'online' | 'offline';
}

interface ContactsPageProps {
    isMobile: boolean;
}

const ContactsPage: React.FC<ContactsPageProps> = ({ isMobile }) => {
    const [contacts] = useState<Contact[]>([
        { id: 1, name: '张三', role: '项目经理', email: 'zhang@example.com', status: 'online' },
        { id: 2, name: '李四', role: '设计师', email: 'li@example.com', status: 'online' },
        { id: 3, name: '王五', role: '开发工程师', email: 'wang@example.com', status: 'offline' },
        { id: 4, name: '赵六', role: '产品经理', email: 'zhao@example.com', status: 'online' },
        { id: 5, name: '钱七', role: '测试工程师', email: 'qian@example.com', status: 'offline' }
    ]);

    return (
        <Card title="联系人">
            <List
                dataSource={contacts}
                renderItem={item => (
                    <List.Item
                        actions={isMobile ? [] : [<Button type="link" icon={<MessageOutlined />}>发送消息</Button>]}
                    >
                        <List.Item.Meta
                            avatar={
                                <Avatar
                                    icon={<UserOutlined />}
                                    style={{
                                        backgroundColor: item.status === 'online' ? '#52c41a' : '#ccc'
                                    }}
                                />
                            }
                            title={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>{item.name}</span>
                                    <span style={{
                                        marginLeft: '8px',
                                        fontSize: '12px',
                                        color: item.status === 'online' ? '#52c41a' : '#ccc'
                                    }}>
                    {item.status === 'online' ? '在线' : '离线'}
                  </span>
                                </div>
                            }
                            description={
                                <div>
                                    <div>{item.role}</div>
                                    <div>{item.email}</div>
                                </div>
                            }
                        />
                        {isMobile && (
                            <Button type="link" icon={<MessageOutlined />}>发送消息</Button>
                        )}
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default ContactsPage;