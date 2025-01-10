import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import {Carousel} from 'primereact/carousel'
import './ProductCarousel.css'

const ProductCarousel = ({products}) => {
    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 4, numScroll: 2 },
        { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
        { breakpoint: '767px', numVisible: 2, numScroll: 1 },
        { breakpoint: '575px', numVisible: 1, numScroll: 1 },
    ];

    const productTemplate = (product) => <ProductCard product={product}></ProductCard>

    return (
        <>
            <div className="product-carousel">
            <Carousel
                value={products}
                numScroll={1}
                numVisible={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
            />
        </div>
        </>
    )
}

export default ProductCarousel;