import React from 'react';
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import {useTelegram} from "../../hooks/useTelegram";

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета'},
    {id: '2', title: 'Куртка', price: 10000, description: 'Тёплая'},
    {id: '3', title: 'Футболка', price: 2000, description: 'Целая'},
    {id: '4', title: 'Трусы', price: 500, description: 'Кельвин кляйн'},
    {id: '5', title: 'Кепка', price: 1500, description: 'Как у фифтисента'},
]

const getTotalPrice = (items = []) => {
    return items.reduce((acc,item) => {
        return acc += item.price;
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])
    const {tg} = useTelegram()

    const onAdd = () => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = []

        if (alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        } else {
            newItems = [ ...addedItems, product]
        }

        setAddedItems(newItems)

        if( newItems.length === 0 ) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div>
            {products.map(item =>
                <ProductItem
                    product   = { item }
                    onAdd     = { onAdd }
                    className = { 'item' }
                />
            )}
        </div>
    );
};

export default ProductList;