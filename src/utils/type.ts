// src/components/SearchTable/types.ts （可单独文件，也可直接写在组件里）
import type { ColumnsType } from 'antd/es/table';

export interface SearchTableProps<RecordType extends object> {
    /** 表格列 */
    columns: ColumnsType<RecordType>;
    /** 完整数据 */
    dataSource: RecordType[];
    /** 需要参与搜索的字段名数组 */
    searchKeys: (keyof RecordType)[];
    /** 一行数据的唯一 key 字段名 */
    rowKey: keyof RecordType;
    /** 可选：表格标题 */
    title?: React.ReactNode;
    /** 可选：搜索框占位文字 */
    placeholder?: string;
    /** 可选：搜索框宽度 */
    searchWidth?: number | string;
}