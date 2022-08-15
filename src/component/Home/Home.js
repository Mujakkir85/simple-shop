import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import AllProducts from '../AllProducts.js/AllProducts';

const Home = () => {

    const [products, setProducts] = useState([])
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])

    const productsPerPage = 9;
    const pagesVisited = pageNumber * productsPerPage;

    const displayProducts = products.slice(pagesVisited, pagesVisited + productsPerPage)

    const pageCount = Math.ceil(products.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
        window.scrollTo(0, 0)
    };

    return (
        <Container className='py-5 '>

            <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
                {
                    displayProducts.map(product => <AllProducts
                        key={product.id}
                        product={product}>
                    </AllProducts>)
                }
            </div>

            <div className='mt-5'>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={changePage}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}

                />
            </div>

        </Container >

    );
};

export default Home;