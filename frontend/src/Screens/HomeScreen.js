import React from 'react'
import axios from 'axios'
import Product from '../components/Product'
import { Col, Row } from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(p => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={p} />
          </Col>
          ))
        }
      </Row>
    </>
  )
}

export default HomeScreen