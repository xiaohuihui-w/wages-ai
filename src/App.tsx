// App.tsx - 主应用组件
import React, { useState } from 'react';
import { Layout, Menu, Button, Space, Tooltip } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MessageOutlined,
    SettingOutlined,
    UserOutlined,
    RobotOutlined,
    HomeOutlined,
    AppstoreOutlined,
    MailOutlined,
    TeamOutlined,
    FileTextOutlined,
    DashboardOutlined
} from '@ant-design/icons';
import { HeaderContent } from './components/HeaderContent';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ChatHistoryPage from './pages/ChatHistoryPage';
import AppsPage from './pages/AppsPage';
import ContactsPage from './pages/ContactsPage';
import DocumentsPage from './pages/DocumentsPage';
import SettingsPage from './pages/SettingsPage';

const { Header, Sider, Content } = Layout;

// 定义菜单项类型
interface MenuItem {
    key: string;
    icon: React.ReactNode;
    label: string;
}

// 定义消息类型
interface Message {
    id: number;
    type: 'user' | 'bot';
    content: string;
}

// 定义应用状态
interface AppState {
    collapsed: boolean;
    currentView: string;
}

const App: React.FC = () => {
    const [state, setState] = useState<AppState>({
        collapsed: false,
        currentView: 'home'
    });

    const menuItems: MenuItem[] = [
        { key: 'home', icon: <HomeOutlined />, label: '首页' },
        { key: 'dashboard', icon: <DashboardOutlined />, label: '仪表板' },
        { key: 'chat', icon: <MessageOutlined />, label: '对话历史' },
        { key: 'apps', icon: <AppstoreOutlined />, label: '应用中心' },
        { key: 'contacts', icon: <TeamOutlined />, label: '联系人' },
        { key: 'documents', icon: <FileTextOutlined />, label: '文档' },
        { key: 'settings', icon: <SettingOutlined />, label: '设置' },
    ];

    const renderPage = (): React.ReactNode => {
        switch(state.currentView) {
            case 'home': return <HomePage />;
            case 'dashboard': return <DashboardPage />;
            case 'chat': return <ChatHistoryPage />;
            case 'apps': return <AppsPage />;
            case 'contacts': return <ContactsPage />;
            case 'documents': return <DocumentsPage />;
            case 'settings': return <SettingsPage />;
            default: return <HomePage />;
        }
    };

    const toggleCollapsed = () => {
        setState(prev => ({
            ...prev,
            collapsed: !prev.collapsed
        }));
    };

    const handleMenuClick = (key: string) => {
        setState(prev => ({
            ...prev,
            currentView: key
        }));
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={state.collapsed}
                onCollapse={toggleCollapsed}
                style={{ background: '#fff' }}

            >
                <div style={{
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: state.collapsed ? 'center' : 'space-between',
                    padding: '0 16px',
                    borderBottom: '1px solid #f0f0f0'
                }}>
                    {!state.collapsed && (
                        <div style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <RobotOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                            <span>AI管理平台</span>
                        </div>
                    )}
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['home']}
                    selectedKeys={[state.currentView]}
                    onClick={({ key }) => handleMenuClick(key)}
                    items={menuItems.map(item => ({
                        key: item.key,
                        icon: item.icon,
                        label: item.label
                    }))}
                    style={{ borderRight: 0 }}
                />
            </Sider>

            <Layout>
                {/*<Header style={{*/}
                {/*    background: '#fff',*/}
                {/*    padding: '0 16px',*/}
                {/*    display: 'flex',*/}
                {/*    alignItems: 'center',*/}
                {/*    justifyContent: 'space-between',*/}
                {/*    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'*/}
                {/*}}>*/}
                {/*    <Button*/}
                {/*        type="text"*/}
                {/*        icon={state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
                {/*        onClick={toggleCollapsed}*/}
                {/*        style={{ fontSize: '16px' }}*/}
                {/*    />*/}

                {/*    <HeaderContent />*/}
                {/*</Header>*/}

                <Content style={{ margin: '0px 150px', overflow: 'initial' }}>
                    <>
                        {renderPage()}
                    </>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;