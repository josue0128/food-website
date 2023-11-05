import menu1 from './menu1.png';
import menu2 from './menu2.png';
import menu3 from './menu3.png';
import menu4 from './menu4.png';
import menu5 from './menu5.png';

export const getMenuList = ()=>{
    return [
        { 
            id: 1,
            image: menu1,
            desc: 'Beef Frenzy Burger',
            price: '47.000'
        },
        { 
            id: 2,
            image: menu2,
            desc: 'Nuke Burger',
            price: '27.000'
        },
        { 
            id: 3,
            image: menu3,
            desc: 'Pizzeria',
            price: '123.000'
        },
        { 
            id: 4,
            image: menu4,
            desc: 'Nuke Burger Madness',
            price: '110.000'
        },
        { 
            id: 5,
            image: menu5,
            desc: 'Penne Pasta Tomato Sause',
            price: '52.000'
        }
    ]
}
