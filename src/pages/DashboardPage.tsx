// TableDemo.tsx
import React, {useState} from 'react';
import {Table, Tag, Divider, Input,Row, Col} from 'antd';
import {SmileOutlined, DownOutlined} from '@ant-design/icons';
import type {ColumnsType} from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    age: number;
    position: string;
    wages: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        // 自定义表头
        render: (_, {name}) => (
            <span>
                {name}
            </span>
        ),
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '职位',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Tags',
        key: 'wages',
        dataIndex: 'wages'
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <>
                <a>重新计算</a>
            </>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: '张三',
        age: 32,
        position: '员工',
        wages: 3000,
    },
    {
        key: '2',
        name: '李四',
        age: 42,
        position: '主管',
        wages: 6000,
    },
    {
        key: '3',
        name: '王五',
        age: 32,
        position: '工程师',
        wages: 9000,
    },
];

const {Search} = Input

const DashboardPage: React.FC = () => {
    const {value, setValue} = useState<DataType>()
    const onSearch = (val: string) => {
        console.log(val)
    }
    return (
        <div>
            <div style={{margin:"8px 0px",fontWeight:"bold",fontSize:"20px"}}>工资列表</div>
            <Row gutter={8} align="middle" style={{margin: "8px 0px"}}>
                <Col span={8}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{width:"50px"}}>姓名：</span>
                        <Search style={{width:"300px"}} allowClear enterButton placeholder="请输入关键词" />
                    </div>
                </Col>

                <Col span={8}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{width:"50px"}}>职位：</span>
                        <Search style={{width:"300px"}} allowClear enterButton placeholder="请输入关键词" />
                    </div>
                </Col>
            </Row>
            <Table columns={columns} dataSource={data}/>
        </div>
    )
}

export default DashboardPage;