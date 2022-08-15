import React, { useEffect, useState } from 'react';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    return (
        <div>

        </div>
    );
};

export default Home;