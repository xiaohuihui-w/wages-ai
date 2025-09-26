// pages/DocumentsPage.tsx - 文档页面
import React, { useState } from 'react';
import { Card, List, Tag, Button, Dropdown, Menu } from 'antd';
import { FileTextOutlined, MoreOutlined } from '@ant-design/icons';

// 定义文档类型
interface Document {
    id: number;
    title: string;
    type: string;
    size: string;
    date: string;
    tags: string[];
}

interface DocumentsPageProps {
    isMobile: boolean;
}

const DocumentsPage: React.FC<DocumentsPageProps> = ({ isMobile }) => {
    const [documents] = useState<Document[]>([
        { id: 1, title: '用户手册', type: 'PDF', size: '2.4MB', date: '2023-09-20', tags: ['重要', '用户'] },
        { id: 2, title: 'API文档', type: 'DOCX', size: '1.8MB', date: '2023-09-18', tags: ['技术', 'API'] },
        { id: 3, title: '设计规范', type: 'PDF', size: '3.1MB', date: '2023-09-15', tags: ['设计', '规范'] },
        { id: 4, title: '技术白皮书', type: 'PDF', size: '4.2MB', date: '2023-09-10', tags: ['技术', '深度'] },
        { id: 5, title: '项目计划', type: 'XLSX', size: '0.8MB', date: '2023-09-05', tags: ['项目', '计划'] }
    ]);

    const menu = (id: number) => (
        <Menu>
            <Menu.Item key="download">
                <span onClick={() => console.log(`下载文档 ${id}`)}>下载</span>
            </Menu.Item>
            <Menu.Item key="share">
                <span onClick={() => console.log(`分享文档 ${id}`)}>分享</span>
            </Menu.Item>
            <Menu.Item key="delete">
                <span onClick={() => console.log(`删除文档 ${id}`)}>删除</span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Card title="文档">
            <List
                dataSource={documents}
                renderItem={item => (
                    <List.Item
                        actions={isMobile ? [] : [
                            <Button type="link">下载</Button>,
                            <Button type="link">分享</Button>
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<FileTextOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                            title={item.title}
                            description={
                                <div>
                                    <div style={{ marginBottom: '8px' }}>
                                        <Tag color="blue">{item.type}</Tag>
                                        <span style={{ marginLeft: '8px' }}>{item.size}</span>
                                        <span style={{ marginLeft: '16px' }}>更新于: {item.date}</span>
                                    </div>
                                    <div>
                                        {item.tags.map((tag, index) => (
                                            <Tag key={index} color="default">{tag}</Tag>
                                        ))}
                                    </div>
                                </div>
                            }
                        />
                        {isMobile ? (
                            <Dropdown overlay={menu(item.id)} placement="bottomRight">
                                <Button type="text" icon={<MoreOutlined />} />
                            </Dropdown>
                        ) : null}
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default DocumentsPage;