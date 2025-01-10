import React from "react";
import './ProductCard.css'
import {Image} from 'primereact/image';
import ActionProductButton from '../ActionProductButton/ActionProductButton'

const ProductCard = ({product}) => {
    return (
        <>
            <div className="product-card">
                <div className="product-image">
                    <Image
                        src={product.image_url}
                        alt={product.name}
                        preview
                    />
                </div>
                <div className="product-info">
                    <h4 className="product-name">{product.name}</h4>
                    <p className="product-price">${product.price}</p>
                   <ActionProductButton product={product}/>
                </div>
            </div>
        </>
    )
}

export default ProductCard;