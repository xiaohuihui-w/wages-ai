// pages/DocumentsPage.tsx - 文档页面
import React, { useState } from 'react';
import { Card, List, Tag, Button } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

// 定义文档类型
interface Document {
    id: number;
    title: string;
    type: string;
    size: string;
    date: string;
}

const DocumentsPage: React.FC = () => {
    const [documents] = useState<Document[]>([
        { id: 1, title: '用户手册', type: 'PDF', size: '2.4MB', date: '2023-09-20' },
        { id: 2, title: 'API文档', type: 'DOCX', size: '1.8MB', date: '2023-09-18' },
        { id: 3, title: '设计规范', type: 'PDF', size: '3.1MB', date: '2023-09-15' },
        { id: 4, title: '技术白皮书', type: 'PDF', size: '4.2MB', date: '2023-09-10' },
        { id: 5, title: '项目计划', type: 'XLSX', size: '0.8MB', date: '2023-09-05' }
    ]);

    return (
        <Card title="文档">
            <List
                dataSource={documents}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Button type="link">下载</Button>,
                            <Button type="link">分享</Button>
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<FileTextOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                            title={item.title}
                            description={
                                <div>
                                    <Tag color="blue">{item.type}</Tag>
                                    <span style={{ marginLeft: '8px' }}>{item.size}</span>
                                    <span style={{ marginLeft: '16px' }}>更新于: {item.date}</span>
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default DocumentsPage;