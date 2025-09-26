// pages/ChatHistoryPage.tsx - 对话历史页面
import React, { useState } from 'react';
import { Card, List, Button, Tag } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

// 定义对话历史项目类型
interface ChatHistoryItem {
    id: number;
    title: string;
    messages: number;
    time: string;
    lastMessage: string;
}

interface ChatHistoryPageProps {
    isMobile: boolean;
}

const ChatHistoryPage: React.FC<ChatHistoryPageProps> = ({ isMobile }) => {
    const [chatHistory] = useState<ChatHistoryItem[]>([
        { id: 1, title: '今日对话', messages: 5, time: '10:30', lastMessage: '项目进度讨论' },
        { id: 2, title: '项目讨论', messages: 12, time: '09:15', lastMessage: '需求确认' },
        { id: 3, title: '技术咨询', messages: 8, time: '昨天', lastMessage: 'API使用问题' },
        { id: 4, title: '产品反馈', messages: 3, time: '前天', lastMessage: '界面优化建议' },
        { id: 5, title: '用户支持', messages: 18, time: '一周前', lastMessage: '问题解决' }
    ]);

    return (
        <Card
            title="对话历史"
            extra={<Button type="primary">新建对话</Button>}
        >
            <List
                dataSource={chatHistory}
                renderItem={item => (
                    <List.Item
                        actions={isMobile ? [] : [<Button type="link">查看</Button>]}
                        onClick={() => !isMobile && console.log(`查看对话 ${item.id}`)}
                        style={{ cursor: isMobile ? 'default' : 'pointer' }}
                    >
                        <List.Item.Meta
                            avatar={<MessageOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                            title={item.title}
                            description={
                                <div>
                                    <div>{item.lastMessage}</div>
                                    <div style={{ marginTop: '4px' }}>
                                        <Tag color="blue">消息数: {item.messages}</Tag>
                                        <Tag color="default">时间: {item.time}</Tag>
                                    </div>
                                </div>
                            }
                        />
                        {isMobile && (
                            <Button type="link" onClick={() => console.log(`查看对话 ${item.id}`)}>
                                查看
                            </Button>
                        )}
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default ChatHistoryPage;