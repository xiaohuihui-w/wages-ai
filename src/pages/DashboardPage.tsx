// pages/DashboardPage.tsx - 仪表板页面
import React from 'react';
import { Card, Statistic, Row, Col } from 'antd';
import {
    MessageOutlined,
    UserOutlined,
    ClockCircleOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';

interface DashboardPageProps {
    isMobile: boolean;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ isMobile }) => {
    return (
        <Card title="仪表板">
            <Row gutter={isMobile ? 8 : 16}>
                <Col span={isMobile ? 12 : 6}>
                    <Card>
                        <Statistic
                            title="总对话数"
                            value={1248}
                            prefix={<MessageOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={isMobile ? 12 : 6}>
                    <Card>
                        <Statistic
                            title="活跃用户"
                            value={156}
                            prefix={<UserOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={isMobile ? 12 : 6}>
                    <Card>
                        <Statistic
                            title="系统运行"
                            value={24}
                            suffix="天"
                            prefix={<ClockCircleOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={isMobile ? 12 : 6}>
                    <Card>
                        <Statistic
                            title="完成任务"
                            value={89}
                            prefix={<CheckCircleOutlined />}
                        />
                    </Card>
                </Col>
            </Row>

            <div style={{ marginTop: isMobile ? '20px' : '40px', padding: isMobile ? '10px' : '20px' }}>
                <h2>系统概览</h2>
                <p>欢迎使用AI管理系统</p>
                <p>当前时间：{new Date().toLocaleString()}</p>
            </div>
        </Card>
    );
};

export default DashboardPage;