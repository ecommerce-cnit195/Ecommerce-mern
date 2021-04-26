import {ProductItem} from "../global";

const INITIAL_STATE: ProductItem[] =  [
    {
        id: '1',
        title: 'Apple iPhone',
        category: 'Electronics',
        brand: 'Apple',
        price: 1000,
        description: 'IPHONE 11 PRO 256GB MEMORY',
        imageUrl1: './images/phone.jpg',
        imageUrl2: './images/phone.jpg'
    },
    {
        id: '2',
        title: 'Camera',
        category: 'Electronics',
        brand: 'Canon',
        price: 600,
        description: 'CANNON EOS 80D DSLR CAMERA',
        imageUrl1: './images/camera.jpg',
        imageUrl2: './images/camera.jpg'
    },
    {
        id: '3',
        title: ' Playstation',
        category: 'Electronics',
        brand: 'SONY',
        price: 500,
        description: 'SONY PLAYSTATION 4 PRO WHITE ',
        imageUrl1: './images/playstation.jpg',
        imageUrl2: './images/playstation.jpg'
    },
    {
        id: '4',
        title: 'Mouse',
        category: 'Electronics',
        brand: 'LOGITECH',
        price: 100,
        description: 'LOGITECH G-SERIES GAMING MOUSE',
        imageUrl1: './images/mouse.jpg',
        imageUrl2: './images/mouse.jpg'
    }
]
export { INITIAL_STATE }


