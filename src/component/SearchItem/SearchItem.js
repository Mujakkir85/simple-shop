import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../Products.css';

const SearchItem = ({ data }) => {

    return (
        <div className='div-grid'>
            {data.map((items) => (
                <Card className='shadow p-3 mb-5 bg-body rounded card-border' style={{ width: '26rem', }}>
                    <Card.Img style={{ height: '350px' }} variant="top" src={items.img} />
                    <Card.Body>
                        <Card.Title className='fs-5 fw-bold'>{items.name}</Card.Title>
                        <Card.Text><span className='fw-bold'>Price:</span> {items.price} $</Card.Text>
                        <Card.Text><span className='fw-bold'> Category:</span> {items.category}</Card.Text>
                        <Card.Text><span className='fw-bold'>Seller:</span> {items.seller}</Card.Text>
                        <Button variant="primary">Buy Now</Button>
                    </Card.Body>
                </Card>
            ))}
            {/* </div> */}
        </div >

    );
};

export default SearchItem;