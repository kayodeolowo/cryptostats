import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../Services/CryptoApi'


const {Title } = Typography;

const Homepage = () => {
    const {data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats;
    if (isFetching) return 'Loading...';
    console.log(data)
  return (
    <>
        <Title level={2}  > Global stats </Title>
        <Row> 
            <Col span={12}> <Statistic title="Total cryptocurrencies" value={globalStats.total}> </Statistic> </Col>
            <Col span={12}> <Statistic title="Total exchange" value={millify(globalStats.exchanges)}> </Statistic> </Col>
            <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}> </Statistic> </Col>
            <Col span={12}> <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}> </Statistic> </Col>
            <Col span={12}> <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}> </Statistic> </Col>
           
        </Row>
    
    </>
  )
}

export default Homepage