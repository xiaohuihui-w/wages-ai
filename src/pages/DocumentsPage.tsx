// pages/DocumentsPage.tsx - 文档页面
import React, { useState } from 'react';
import { Card, List, Tag, Button, Dropdown, Menu } from 'antd';
import { FileTextOutlined, MoreOutlined } from '@ant-design/icons';
import SearchTable from "../components/searchTable.tsx";
import type {ColumnsType} from "antd/es/table";

// 定义文档类型
interface Document {
    id: number;
    structureName: string;
    date: string;
    status: string;
}

interface DocumentsPageProps {
    isMobile: boolean;
}

const columns: ColumnsType<Document> = [
    { title: '结构名', dataIndex: 'structureName' },
    { title: '日期', dataIndex: 'date' },
    { title: '状态', dataIndex: 'status' }
];

const DocumentsPage: React.FC<DocumentsPageProps> = ({ isMobile }) => {
    const [documents] = useState<Document[]>([
        { id: 1, structureName: '结构一', date: '2025-09-26', status: '未发布'},
        { id: 2, structureName: '结构二', date: '2025-09-26', status: '未发布'},
        { id: 3, structureName: '结构三', date: '2025-09-26', status: '未发布'},
        { id: 4, structureName: '结构四', date: '2025-09-26', status: '未发布'},
        { id: 5, structureName: '结构五', date: '2025-09-26', status: '未发布'}
    ]);


    return (
        <SearchTable<Document>
            title="工资结构列表"
            columns={columns}
            dataSource={documents}
            placeholder="请输入结构名称"
            searchWidth={300}
            rowKey="id"
        />
    );
};

export default DocumentsPage;