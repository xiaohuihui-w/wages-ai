// pages/AppsPage.tsx - 应用中心页面
import React from 'react';
import { Card, List } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';

// 定义应用类型
interface AppItem {
    id: number;
    title: string;
    desc: string;
}

const AppsPage: React.FC = () => {
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
                grid={{ gutter: 16, column: 3 }}
                dataSource={apps}
                renderItem={item => (
                    <List.Item>
                        <Card
                            title={item.title}
                            style={{ textAlign: 'center' }}
                            extra={<AppstoreOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                        >
                            {item.desc}
                        </Card>
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default AppsPage;