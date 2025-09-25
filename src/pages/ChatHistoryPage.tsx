// pages/ChatHistoryPage.tsx - 对话历史页面
import React, { useState } from 'react';
import { Card, List, Button } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

// 定义对话历史项目类型
interface ChatHistoryItem {
    id: number;
    title: string;
    messages: number;
    time: string;
}

const ChatHistoryPage: React.FC = () => {
    const [chatHistory] = useState<ChatHistoryItem[]>([
        { id: 1, title: '今日对话', messages: 5, time: '10:30' },
        { id: 2, title: '项目讨论', messages: 12, time: '09:15' },
        { id: 3, title: '技术咨询', messages: 8, time: '昨天' },
        { id: 4, title: '产品反馈', messages: 3, time: '前天' },
        { id: 5, title: '用户支持', messages: 18, time: '一周前' }
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
                        actions={[<Button type="link">查看</Button>]}
                    >
                        <List.Item.Meta
                            avatar={<MessageOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                            title={item.title}
                            description={`消息数: ${item.messages} | 时间: ${item.time}`}
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default ChatHistoryPage;