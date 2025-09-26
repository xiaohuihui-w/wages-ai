// pages/HomePage.tsx - 首页（AI对话页面）
import React, { useState, useRef, useEffect } from 'react';
import { Card, Input, List, Avatar, Space, Button, message } from 'antd';
import { RobotOutlined, UserOutlined } from '@ant-design/icons';

const { TextArea } = Input;

// 定义消息类型
interface Message {
    id: number;
    type: 'user' | 'bot';
    content: string;
}

// 定义状态类型
interface State {
    messages: Message[];
    inputValue: string;
}

interface HomePageProps {
    isMobile: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ isMobile }) => {
    const [state, setState] = useState<State>({
        messages: [
            { id: 1, type: 'bot', content: '你好！我是AI助手，有什么可以帮助你的吗？' }
        ],
        inputValue: ''
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // 滚动到底部
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [state.messages]);

    // 发送消息
    const handleSendMessage = () => {
        if (state.inputValue.trim() === '') {
            message.warning('请输入消息内容');
            return;
        }

        const newMessage: Message = {
            id: state.messages.length + 1,
            type: 'user',
            content: state.inputValue
        };

        setState(prev => ({
            ...prev,
            messages: [...prev.messages, newMessage],
            inputValue: ''
        }));

        // 模拟AI回复
        setTimeout(() => {
            const aiResponse: Message = {
                id: state.messages.length + 2,
                type: 'bot',
                content: `我收到了你的消息："${state.inputValue}"。这是一个模拟的AI回复。`
            };
            setState(prev => ({
                ...prev,
                messages: [...prev.messages, aiResponse]
            }));
        }, 1000);
    };

    // 处理回车发送
    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <Card
            title={
                <Space>
                    <RobotOutlined style={{ color: '#1890ff' }} />
                    <span>AI对话助手</span>
                </Space>
            }
        >
            <div style={{
                height: isMobile ? 'calc(100vh - 220px)' : 'calc(100vh - 300px)',
                overflowY: 'auto',
                padding: '16px',
                backgroundColor: '#f5f5f5',
                marginBottom: '16px',
                borderRadius: '8px'
            }}>
                <List
                    dataSource={state.messages}
                    renderItem={item => (
                        <List.Item style={{
                            justifyContent: item.type === 'user' ? 'flex-end' : 'flex-start',
                            marginBottom: '16px',
                            padding: '0 8px' // 在移动端增加左右间距
                        }}>
                            <div style={{
                                maxWidth: isMobile ? '85%' : '70%',
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: item.type === 'user' ? 'row-reverse' : 'row'
                            }}>
                                <Avatar
                                    icon={item.type === 'user' ? <UserOutlined /> : <RobotOutlined />}
                                    style={{
                                        backgroundColor: item.type === 'user' ? '#1890ff' : '#52c41a',
                                        margin: item.type === 'user' ? '0 0 0 12px' : '0 12px 0 0'
                                    }}
                                />
                                <div style={{
                                    backgroundColor: item.type === 'user' ? '#1890ff' : '#ffffff',
                                    color: item.type === 'user' ? '#ffffff' : '#333',
                                    padding: '12px',
                                    borderRadius: '18px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    wordWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}>
                                    {item.content}
                                </div>
                            </div>
                        </List.Item>
                    )}
                />
                <div ref={messagesEndRef} />
            </div>

            <div style={{ padding: isMobile ? '0 8px 16px' : '0 16px 16px' }}>
                <TextArea
                    ref={inputRef}
                    rows={isMobile ? 3 : 4}
                    value={state.inputValue}
                    onChange={e => setState(prev => ({...prev, inputValue: e.target.value}))}
                    onKeyPress={handleKeyPress}
                    placeholder="输入消息..."
                    style={{
                        marginBottom: '8px',
                        borderRadius: '8px'
                    }}
                />
                <Button
                    type="primary"
                    onClick={handleSendMessage}
                    disabled={!state.inputValue.trim()}
                    block={isMobile}
                >
                    发送
                </Button>
            </div>
        </Card>
    );
};

export default HomePage;