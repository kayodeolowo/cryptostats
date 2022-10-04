import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'


const {Title } = Typography;

const Homepage = () => {
  return (
    <>
        <Title level={2}  > Global stats </Title>
        <Row> 
            <Col span={12}> <Statistic title="Total cryptocurrencies" value={5}> </Statistic> </Col>
            <Col span={12}> <Statistic title="Total exchange" value={5}> </Statistic> </Col>
            <Col span={12}> <Statistic title="Total Market Cap" value={5}> </Statistic> </Col>
            <Col span={12}> <Statistic title="Total 24h Volume" value={5}> </Statistic> </Col>
            <Col span={12}> <Statistic title="Total Markets" value={5}> </Statistic> </Col>
           
        </Row>
    
    </>
  )
}

export default Homepage