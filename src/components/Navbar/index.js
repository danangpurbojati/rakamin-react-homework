import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button} from 'antd';
import "./navbar.scss"
import ImgBRI from '../../assets/images-ui-navbar/logo-long-bri.png'
import { Link } from 'react-router-dom';


const { Header, Footer, Sider, Content } = Layout;

const Navbar = () => {
    return (
        <div>
            
                            <Layout className="layout">
                                <Header className="header">
                                <img clasName="logo" src={ImgBRI} alt="logo bri"/>
                                <div className="menu-right"> 
                                    <Menu className="menu" mode="horizontal" defaultSelectedKeys={['2']}>
                                        <Menu.Item className="menu">
                                            <Link style={{color: '#fff'}} to="/beranda">Beranda</Link>
                                        </Menu.Item>
                                        <Menu.Item className="menu">
                                            <Link to="/book-antrian" style={{color: '#fff'}}>Book Nomor Antrian</Link>  
                                        </Menu.Item>
                                        <Menu.Item className="menu">
                                            <Link to="/daftar-bank" style={{color: '#fff'}}>DaftarBank & Info Antrian</Link>  
                                        </Menu.Item>
                                        
                                    </Menu>
                                    <Button className="btn-out"  shape="round">Sign out</Button>
                                </div>
                                
                                </Header>
                               
                            </Layout>

                            
                
                    
               
        </div>
    )
}

export default Navbar
