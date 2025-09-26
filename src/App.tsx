// App.tsx - 主应用组件
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Space, Tooltip, Drawer, Avatar } from 'antd';
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
    DashboardOutlined,
    CloseOutlined
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
    mobileMenuOpen: boolean;
    isMobile: boolean;
}

const App: React.FC = () => {
    const [state, setState] = useState<AppState>({
        collapsed: false,
        currentView: 'home',
        mobileMenuOpen: false,
        isMobile: false
    });

    // 检测屏幕尺寸
    useEffect(() => {
        const checkIsMobile = () => {
            setState(prev => ({
                ...prev,
                isMobile: window.innerWidth < 768
            }));
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const menuItems: MenuItem[] = [
        { key: 'home', icon: <HomeOutlined />, label: '首页' },
        { key: 'dashboard', icon: <DashboardOutlined />, label: '工资表' },
        { key: 'chat', icon: <MessageOutlined />, label: '对话历史' },
        { key: 'apps', icon: <AppstoreOutlined />, label: '应用中心' },
        { key: 'contacts', icon: <TeamOutlined />, label: '用户表' },
        { key: 'documents', icon: <FileTextOutlined />, label: '工资结构' },
        { key: 'settings', icon: <SettingOutlined />, label: '设置' },
    ];

    const renderPage = (): React.ReactNode => {
        switch(state.currentView) {
            case 'home': return <HomePage isMobile={state.isMobile} />;
            case 'dashboard': return <DashboardPage isMobile={state.isMobile} />;
            case 'chat': return <ChatHistoryPage isMobile={state.isMobile} />;
            case 'apps': return <AppsPage isMobile={state.isMobile} />;
            case 'contacts': return <ContactsPage isMobile={state.isMobile} />;
            case 'documents': return <DocumentsPage isMobile={state.isMobile} />;
            case 'settings': return <SettingsPage isMobile={state.isMobile} />;
            default: return <HomePage isMobile={state.isMobile} />;
        }
    };

    const toggleCollapsed = () => {
        if (state.isMobile) {
            setState(prev => ({
                ...prev,
                mobileMenuOpen: !prev.mobileMenuOpen
            }));
        } else {
            setState(prev => ({
                ...prev,
                collapsed: !prev.collapsed
            }));
        }
    };

    const handleMenuClick = (key: string) => {
        setState(prev => ({
            ...prev,
            currentView: key,
            mobileMenuOpen: false // 关闭移动端菜单
        }));
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 移动端抽屉菜单 */}
            {state.isMobile && (
                <Drawer
                    placement="left"
                    closable={false}
                    onClose={() => setState(prev => ({...prev, mobileMenuOpen: false}))}
                    open={state.mobileMenuOpen}
                    width={240}
                    styles={{ body: { padding: 0 } }}
                >
                    <div style={{
                        height: '64px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 16px',
                        borderBottom: '1px solid #f0f0f0'
                    }}>
                        <div style={{
                            fontSize: '18px',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <RobotOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                            <span>智能工资管理平台</span>
                        </div>
                        <Button
                            type="text"
                            icon={<CloseOutlined />}
                            onClick={() => setState(prev => ({...prev, mobileMenuOpen: false}))}
                        />
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
                </Drawer>
            )}

            {/* 桌面端侧边栏 */}
            {!state.isMobile && (
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
                                fontSize: '16px',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <RobotOutlined style={{ marginRight: '8px', color: '#1890ff' }} />
                                <span>智能工资管理平台</span>
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
            )}

            <Layout>
                {/*<Header style={{*/}
                {/*    background: '#fff',*/}
                {/*    padding: '0 16px',*/}
                {/*    display: 'flex',*/}
                {/*    alignItems: 'center',*/}
                {/*    justifyContent: 'space-between',*/}
                {/*    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',*/}
                {/*    position: 'sticky',*/}
                {/*    top: 0,*/}
                {/*    zIndex: 1000*/}
                {/*}}>*/}
                {/*    <Button*/}
                {/*        type="text"*/}
                {/*        icon={state.isMobile || state.mobileMenuOpen ? <CloseOutlined /> : state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}*/}
                {/*        onClick={toggleCollapsed}*/}
                {/*        style={{ fontSize: '16px' }}*/}
                {/*    />*/}

                {/*    <HeaderContent />*/}
                {/*</Header>*/}

                <Content style={{
                    margin: state.isMobile ? '8px' : '0px 200px',
                    overflow: 'initial',
                    padding: state.isMobile ? '8px' : undefined
                }}>
                    <>
                        {renderPage()}
                    </>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;