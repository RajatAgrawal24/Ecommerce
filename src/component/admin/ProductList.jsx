import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {MDBDataTable}  from 'mdbreact'
import { Slider, Typography } from "@material-ui/core";
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux';
// import { getAdminProducts, clearErrors } from '../../actions/ProductAction';
import { getProducts } from '../../redux/actions/ProductAction'
import { clearErrors } from '../../redux/actions/OrderAction'
import MetaData from '../layout/MetaData';
import Sidebar from './Sidebar';
import Loading from '../layout/Loading';

function ProductList() {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector(state => state.pro)
    // console.log(products)

    useEffect(() => {
        dispatch(getProducts())
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch.alert, error])
    const setProduct = () => {
        const data = {
            columns: [
                {
                    label: 'Id',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'

                },
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc'

                },
                {
                    label: 'Stock',
                    field: 'stock',
                    sort: 'asc'

                },
                {
                    label: 'Image',
                    field: 'image',
                    sort: 'asc'

                },
                {
                    label: 'Actions',
                    field: 'actions',


                },
            ],
            rows: []
        }
        products.forEach(product => {
            data.rows.push({
                id: product._id,
                name: product.name,
                price: `Rs:${product.price}`,
                stock: `:${product.stock}`,
                image: <img width={100} height={100} src={product.images.url}></img>,

                actions:
                    <>
                        <Link to={`/admin/product/${product._id}`} className='btn btn-primary py-1 px-2'>
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <button className="btn btn-danger py-1 px-2 ml-2">
                            <i className="fa fa-trash"></i>
                        </button>
                    </>

            })
        })
        return data;
    }
    return (
        <>
         <MetaData title={'Products'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <h1 className="my-5">All Products</h1>
                    {loading ? <Loading /> : (
                        <MDBDataTable
                            data={setProduct()}
                            className='px-3'
                            bordered
                            striped
                            hover


                        />

                    )}
                </div>
            </div>
        </>
    )
}

export default ProductList
