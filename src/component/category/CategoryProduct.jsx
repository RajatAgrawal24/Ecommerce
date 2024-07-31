import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listCategoryProducts } from '../../redux/actions/ProductAction';
import Loading from '../layout/Loading';

function CategoryProduct() {
    const dispatch = useDispatch();
    const { category } = useParams();
    // console.log(category)

    const categoryProduct = useSelector((state) => state.categoryPro || { products: [] });
    const { loading, error, products } = categoryProduct;
    // console.log(products)

    useEffect(() => {
        if (category) {
            dispatch(listCategoryProducts(category));
        }
    }, [dispatch, category]);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : error ? (
                <p>{error}</p>
            ) : products.length === 0 ? (
                <center><p>No Products Found in this Category</p></center>
            ) : (
                <div className="container-fluid pt-5 pb-3">
                    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">{category} Products</span></h2>
                    <div className="row px-xl-5">
                        {products?.map((product) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={product._id}>
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img position-relative overflow-hidden">
                                        <img className="img-fluid" style={{width:"300px" , height:"300px"}} src={product.images.url} alt="Product Image" />
                                        <div className="product-action">
                                        <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-shopping-cart"></i></Link>
                                        <Link className="btn btn-outline-dark btn-square" to=""><i className="far fa-heart"></i></Link>
                                        <Link className="btn btn-outline-dark btn-square" to=""><i className="fa fa-sync-alt"></i></Link>
                                        <Link className="btn btn-outline-dark btn-square" to={`/productDetail/${product._id}`}><i className="fa fa-search"></i></Link>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                    <Link className="h6 text-decoration-none text-truncate" to={`/productDetail/${product._id}`}>{product.name}</Link>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>Rs. {product.price}</h5><h6 className="text-muted ml-2"><del>Rs. {product.price}</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small className="fa fa-star text-primary mr-1"></small>
                                            <small>({product.stock})</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CategoryProduct;
