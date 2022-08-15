import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AllProducts = ({ product }) => {

    const { id, category, img, name, seller, price } = product
    return (
        <div>
            <Card className='shadow p-3 mb-5 bg-body rounded card-border' style={{ width: '100%', height: '90%' }}>
                <Card.Img style={{ height: '350px' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='fs-5 fw-bold'>{name.slice(0, 28)}</Card.Title>
                    <Card.Text><span className='fw-bold'>Price:</span> {price} $</Card.Text>
                    <Card.Text><span className='fw-bold'> Category:</span> {category}</Card.Text>
                    <Card.Text><span className='fw-bold'>Seller:</span> {seller}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default AllProducts;