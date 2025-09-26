import React, {useState} from 'react';
import {Table, Input,Row, Col} from 'antd';
import type { SearchTableProps } from '../utils/type.ts';


const {Search} = Input

function SearchTable<RecordType extends object>(
    props: SearchTableProps<RecordType>
) {
    const {
        columns,
        dataSource,
        title = '搜索结果',
        placeholder = '请输入关键词',
        searchWidth = 300,
        rowKey
    } = props;
    const {value, setValue} = useState('')
    const onSearch = (val: string) => {
        console.log(val)
    }
    return (
        <div>
            <div style={{margin:"8px 0px",fontWeight:"bold",fontSize:"20px"}}>{title}</div>
            <Row gutter={8} align="middle" style={{margin: "8px 0px"}}>
                <Col span={8}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{width:"50px"}}>姓名：</span>
                        <Search style={{width:searchWidth}} allowClear enterButton placeholder={placeholder} onSearch={onSearch} value={value} />
                    </div>
                </Col>

                <Col span={8}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{width:"50px"}}>职位：</span>
                        <Search style={{width:searchWidth}} allowClear enterButton placeholder={placeholder} />
                    </div>
                </Col>
            </Row>
            <Table columns={columns} dataSource={dataSource} rowKey={String(rowKey)}/>
        </div>
    )
}

export default SearchTable;