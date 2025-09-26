// pages/AppsPage.tsx - 应用中心页面
import React from 'react';
import { Card, List,Button } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

// 定义应用类型
interface AppItem {
    id: number;
    title: string;
    desc: string;
}

interface AppsPageProps {
    isMobile: boolean;
}

const AppsPage: React.FC<AppsPageProps> = ({ isMobile }) => {
    const apps: AppItem[] = [
        { id: 1, title: 'AI助手', desc: '智能对话机器人' },
        { id: 2, title: '数据分析', desc: '数据可视化工具' },
        { id: 3, title: '文档生成', desc: '自动生成文档' },
        { id: 4, title: '翻译工具', desc: '多语言翻译服务' },
        { id: 5, title: '代码助手', desc: '编程辅助工具' },
        { id: 6, title: '图像生成', desc: 'AI图像创作' }
    ];

    return (
        <Card title="应用中心">
            <List
                grid={{
                    gutter: 16,
                    column: isMobile ? 2 : 3,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 4,
                    xxl: 4
                }}
                dataSource={apps}
                renderItem={item => (
                    <List.Item>
                        <Card
                            title={item.title}
                            style={{ textAlign: 'center', height: '100%' }}
                            extra={<AppstoreOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                        >
                            <p style={{ minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {item.desc}
                            </p>
                            <Button type="primary" style={{ marginTop: '10px' }}>使用</Button>
                        </Card>
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default AppsPage;