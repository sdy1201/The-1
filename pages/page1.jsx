import 'D:/sdy/ISS/iss/src/App.css';
import { Menu, Dropdown, message } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { useState,useNavigate } from 'react';

function App(props) {
  const navigate=useNavigate()
  const[storename,setStorename]=useState("门店信息")
   const logout = ()=>{
     message.success("退出登录，即将返回上级界面");
  //   localStorage.clear();   // 清除localStorage本地缓存中的数据
    setTimeout(() => navigate('/login'), 1500);//在退出登录后返回上级界面
   }
  const menu = (
    <Menu>
        <Menu.Item key={1}>门店1</Menu.Item>
        <Menu.Divider />
        <Menu.Item key={2}>门店2</Menu.Item>
        <Menu.Divider />
        <Menu.Item key={3}>门店3</Menu.Item>
        <Menu.Divider />
        <Menu.Item key={4}>门店4</Menu.Item>
        <Menu.Divider />
        <Menu.Item key={5}>门店5</Menu.Item>
        <Menu.Divider />
        <Menu.Item key={0} onClick={logout}>退出登录</Menu.Item>
    </Menu>
  );
  return (
    <header>
    {/* <img src={logoImg} alt="" style={{width:"100px",height:"20px"}} className="logo" /> */}{/*此处设置图片*/}
    <div className="right">
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <img  className="avatar" alt="" />
                <span>{storename}</span>
                <CaretDownOutlined />
            </a>
        </Dropdown>
    </div>
    <h1>智能排班系统</h1>
</header>
    
  );
}

export default App;
