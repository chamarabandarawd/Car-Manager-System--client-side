import React, {useState } from 'react'
import { NavLink} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import { Button, Col, Image, Row } from 'react-bootstrap';

const AddVehicle = () => {
    const [van, setVan] = useState(null)
  

  
  
    const handleSave = () => {
      fetch('http://localhost:8080/vans', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(van)
      }).then(res => {
        if (!res.ok) {
          return alert("Vehical not Updated!")
        } else {
  
          return alert("This vehical was updated!");
        }
      })
    }
  
  return (
      <div className="container">
        <NavLink
          to={`..`}
          relative="path"
          className="back-button"
        >&larr; <span>Back to  main</span></NavLink>
        <h1>Add Vehicale</h1>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <Row>
              <Col >
                <Image className='col-lg-9 col-sm-12' src={van?.imgUrl} rounded />
              </Col>
              <Form.Label className='mt-2' >Image Url</Form.Label>
              <Form.Control
                className='mb-2'
                id='imgUrl'
                type="text"
                value={van?.imgUrl}
                onChange={e => setVan(prevVan => ({ ...prevVan,imgUrl: e.target.value }))}
                placeholder="Normal text" />
            </Row>
          </div>
          <div className="col-lg-8 col-sm-12">
            <Form.Label className='mt-2' >Name</Form.Label>
            <Form.Control
  
              id='name'
              type="text"
              value={van?.name}
              onChange={e => setVan(prevVan => ({ ...prevVan, name: e.target.value }))}
              placeholder="Normal text" />
            <Form.Label className='mt-2'>Type</Form.Label>
            <Form.Control
              id='type'
              type="text"
              value={van?.type}
              onChange={e => setVan(prevVan => ({ ...prevVan, type: e.target.value }))}
              placeholder="Normal text" />
            <Form.Label className='mt-2' >Price</Form.Label>
            <Row>
              <Col lg={6}>
                <Form.Control
                  id='price'
                  type="text"
                  value={van?.price}
                  placeholder="are"
                  onChange={e => setVan(prevVan => ({ ...prevVan, price: e.target.value }))}
                />
              </Col>
              <Col lg={6}>
                LKR/day
              </Col>
            </Row>
            <Form.Label className='mt-2' >Description</Form.Label>
            <Form.Control as="textarea" rows={5} value={van?.description}
              onChange={e => setVan(prevVan => ({ ...prevVan, description: e.target.value }))} />
            <NavLink
              to={`..`}
              relative="path"
              className="back-button"
            >
              <Button
                onClick={() => handleSave()}
  
                className='mt-2 col-2 mb-2' variant="success">Add</Button>
            </NavLink>
          </div>
        </div>
      </div>
  )
}

export default AddVehicle