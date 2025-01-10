import React from "react";
import CategoryService from '../../services/CategoryService'
import { useState } from "react";
import { useEffect } from "react";
import ProductCarousel from '../ProductCarousel/ProductCarousel'
import './CategorySection.css';
import { useLoading } from "../../context/LoadingContext";
import Loading from "../Loading/Loading";

const CategorySection = () => {
    const {loading, setLoading} = useLoading();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryService.getCategories().then(data => {
            setCategories(data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        })
    }, []);

    return (    
        <>
        {!loading ? (
            categories?.map((category) => (
                <section className="category-section animate__animated animate__fadeIn" key={category.id}>
                <div className="category-header">
                    <h2 className="category-title">{category.name}</h2>
                    <p className="category-description">{category.description}</p>
                </div>
                <ProductCarousel products={category.products}/>
                </section>
            ))
        ) : (
            <Loading/>
        ) 
        }
        </>
    );
}

export default CategorySection;