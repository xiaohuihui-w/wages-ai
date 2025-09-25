// pages/DashboardPage.tsx - 仪表板页面
import React from 'react';
import { Card } from 'antd';

const DashboardPage: React.FC = () => {
    return (
        <Card title="仪表板">
            <div style={{ padding: '20px' }}>
                <h2>系统概览</h2>
                <p>欢迎使用AI管理系统</p>
                <p>当前时间：{new Date().toLocaleString()}</p>
                <div style={{ marginTop: '20px' }}>
                    <h3>关键指标</h3>
                    <ul>
                        <li>总对话数: 1,248</li>
                        <li>活跃用户: 156</li>
                        <li>系统运行时间: 24天</li>
                    </ul>
                </div>
            </div>
        </Card>
    );
};

export default DashboardPage;