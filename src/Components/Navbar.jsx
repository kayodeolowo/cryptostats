import React from 'react'
import {Button , Menu, Typography, Avatar} from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
//import icon from '../images/logo.png'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div> 
            <img className='h-10' src='./images/logo.png'/>
            {/* <Avatar className='w-10' src={icon} size="small"/> */}
            <Typography.Title level={2} >
                <Link to="/" className=''> Crypto stats </Link>
            </Typography.Title>
            {/* <Button> 

            </Button> */}
        </div>
        <Menu theme="dark w-1/4 " className='bg-blue-700'> 
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/"> Home </Link>
                </Menu.Item>

                <Menu.Item icon={<FundOutlined/>}>
                    <Link to="/cryptocurrencies"> Cryptocurrencies </Link>
                </Menu.Item>

                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to="/exchanges"> Exhchanges </Link>
                </Menu.Item>

                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to="/news"> News</Link>
                </Menu.Item>
        </Menu>

    </div>
  )
}

export default Navbar