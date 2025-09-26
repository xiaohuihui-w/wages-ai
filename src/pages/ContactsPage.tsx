// pages/ContactsPage.tsx - 联系人页面
import React, { useState } from 'react';
import type {ColumnsType} from "antd/es/table";
import SearchTable from "../components/searchTable.tsx";

// 定义联系人类型
interface Contact {
    id: number;
    name: string;
    age: number;
    role: string;
    email: string;
}

const columns: ColumnsType<Contact> = [
    { title: '姓名', dataIndex: 'name' },
    { title: '年龄', dataIndex: 'age' },
    { title: '职位', dataIndex: 'role' },
    { title: '邮箱', dataIndex: 'email' },
];

interface ContactsPageProps {
    isMobile: boolean;
}

const ContactsPage: React.FC<ContactsPageProps> = ({ isMobile }) => {
    const [contacts] = useState<Contact[]>([
        { id: 1, name: '张三',age:32, role: '项目经理', email: 'zhang@example.com' },
        { id: 2, name: '李四',age:30, role: '设计师', email: 'li@example.com' },
        { id: 3, name: '王五',age:28, role: '开发工程师', email: 'wang@example.com' },
        { id: 4, name: '赵六',age:32, role: '产品经理', email: 'zhao@example.com' },
        { id: 5, name: '钱七',age:27, role: '测试工程师', email: 'qian@example.com' }
    ]);

    return (
        <SearchTable<Contact>
            title="员工列表"
            columns={columns}
            dataSource={contacts}
            placeholder="请输入姓名或标签"
            searchWidth={300}
            rowKey="id"
        />
    );
};

export default ContactsPage;