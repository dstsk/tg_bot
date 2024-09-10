import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css'

const ProductItem = ({product, className, onAdd}) => {
    const onAddHandler = () => {
        onAdd(product)
    }
    return (
        <div className={'product' + className}>
            <div className={'img'}/>
            <div className={'title'} children={product.title}/>
            <div className={'description'} children={product.description}/>
            <div
                className={'price'}
                children={<span>Стоимость: <b>{product.price}</b></span>}
            />
            <Button
                className = {'add-btn'}
                onClick={onAddHandler}
            >
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;