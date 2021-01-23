import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../../Archetypes/ProductCard/ProductCard';
import PageTitle from '../../Archetypes/PageTitle/PageTitle';
import Button from '../../Archetypes/Button/Button';
import './ProductArea.css'

const ProductArea = () => (
  <div className="product-area-wrapper">
    <div className="title-area">
        <PageTitle PageTitleText="Treatments And Massages"/>
    </div>

    <div className="product-cards-wrapper">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>

    <div className="button-cta-area">
        <div className="button-title">
            <PageTitle PageTitleText="Find Your Balance"/>
            <Button buttonText="Book Now"></Button>
            <a className="contact-us-link" href="#">
              <span >Or contact us for more info</span>
            </a>
        </div>
    </div>
  </div>
)



export default ProductArea
