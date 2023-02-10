import 'D:/sdy/ISS/iss/src/App.css';
import { Menu, Dropdown, message } from 'antd';
//import { CaretDownOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import useNavigate from 'react-router-dom'

function App(props) {
  const navigate = useNavigate();
  const[storename,setStorename]=useState("门店信息")
  const logout = ()=>{
     message.success("退出登录，即将返回上级界面");
  //   localStorage.clear();   // 清除localStorage本地缓存中的数据
    setTimeout(() => navigate('/login'), 1500);//在退出登录后返回上级界面
   }
    const [login,setLogin] = useState(false);
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        axios({
            method:'GET',
            url:`https://localhost/user/${username}`
        }).then(response => {
            if(response.data.password === password) {
                console.log('登录成功')
            }
        })
        if(username==='admin'&&password==='123456') {
            console.log('登录成功');
            setLogin(true);
           
        } else {
            console.log('用户名或密码错误');
        }
    }
const Regisrate=()=>{
    navigate('/')//此处有导航钮
}
    useEffect(()=>{
        if(login) {
            console.log('登录成功,正在跳转界面')
            navigate('/home')
        } else {
            console.log('等待用户登录')
        }
    })
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
    <a>
            <h1 className='main'>欢迎使用智能排班系统1.0</h1>
            <form>
                <div>用户：<input className='inputext' ref={usernameRef} type='text' placeholder='username'/><br/></div>
                <div>密码：<input className='inputext'ref={passwordRef} type='password' placeholder='password'/><br/></div>
               
                <button className='inputext' onClick={handleSubmit} type='submit'>登录</button>
                <button className='inputext' onClick={Regisrate} type='submit'>注册</button>
            </form>
        </a>
    
  );
}

export default App;
