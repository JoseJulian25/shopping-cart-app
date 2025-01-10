import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Chip } from 'primereact/chip';
import { Rating } from 'primereact/rating';
import RemoveFromCartButton from '../ActionProductButton/RemoveFromCardButton';
import { Toast } from 'primereact/toast';
import { createPortal } from 'react-dom';
import './ShoppingCartItems.css'

const ShoppingCartItem = ({ item, updateQuantity }) => {
    const toast = useRef(null);

    const showMessage = (severity, summary, detail) => {
        toast.current?.show({ severity, summary, detail, life: 2500 });
    };

    return (
        <>
        {createPortal(
                <Toast ref={toast} />,
                document.body 
            )}
        <div className="col-12">
    <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4 border-round shadow-2 surface-card">
        <img
            className="w-9 sm:w-16rem xl:w-10rem shadow-4 block xl:block mx-auto border-round"
            src={item.product.image_url}
            alt={item.product.name}
        />

        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                <div className="text-2xl font-bold text-900">{item.product.name}</div>

                <div className="flex align-items-center gap-3">
                    <span className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-primary"></i>
                        <span className="font-semibold text-primary">{item.product.category.name}</span>
                    </span>
                    <Chip label={" Stock: " + item.product.stock} className="pi pi-box bg-blue-100 text-blue-900" />
                </div>

                <div className="text-sm text-gray-600 mt-3">
                    <p><b>Description:</b></p>
                    {item.product.description ? item.product.description : "No description available."}
                </div>

                <Rating value={item.product.rating} readOnly cancel={false} stars={5} />
            </div>

            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                <span className="text-2xl font-semibold text-green-600">${item.product.price}</span>

                <div className="flex align-items-center gap-2">
                    <Button
                        icon="pi pi-minus"
                        className="p-button-rounded p-button-text p-button-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                    />
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <Button
                        icon="pi pi-plus"
                        className="p-button-rounded p-button-text p-button-secondary"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    />
                </div>

                <RemoveFromCartButton product={item.product} showMessage={showMessage} label={" "} />
            </div>
        </div>
    </div>
        <div className='divider'></div>
    </div>

        </>
    );
};

export default ShoppingCartItem;
