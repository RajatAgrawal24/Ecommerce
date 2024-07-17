import React from 'react'
import { Link } from 'react-router-dom'

function Category({category}) {
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <Link className="text-decoration-none" to={`/category/${category.name}`}>
            <div className="cat-item d-flex align-items-center mb-4">
                <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
                    <img className="img-fluid" src={category.image.url} alt=""/>
                </div>
                <div className="flex-fill pl-3">
                    <h6>{category.name}</h6>
                    <small className="text-body">{category.description}</small>
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}

export default Category