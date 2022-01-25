"use strict"

const datos=[
    {
        "precio":8,
        "imagen":"https://gps.burgerkingencasa.es/images/products/1576063004187_Doble_Cheese_Bacon_XXL.png",
        "nombre":"Double cheese bacon XXL",
        "ingredientes":"Carne whopper, bacon, mostaza, ketchup, queso y pepinillo",
        "peso":333.6,
        "tipo de carne":"whopper",
        "pagina del producto":"https://www.burgerking.es/carta/menus/hamburguesas/doble-cheese-bacon-xxl",
        "lechuga":false,
        "fecha":"2021-12-03"
    },
    {
        "precio":6,
        "imagen":"https://gps.burgerkingencasa.es/images/products/1637831085795_ss--long-vegetal-dest.png",
        "nombre":"Long vegetal",
        "ingredientes":"Pollo, lechuga y mayonesa",
        "peso":217.2,
        "tipo de carne":"vegetal",
        "pagina del producto":"https://www.burgerking.es/carta/menus/hamburguesas/long-vegetal",
        "lechuga":true,
        "fecha":"2021-11-13"
    },
    {
        "precio":10,
        "imagen":"https://gps.burgerkingencasa.es/images/products/1575463631926_Menu_Big_King.png",
        "nombre":"Big king",
        "ingredientes":"Carne burger, lechuga, queso, pepinillo, salsa big king y cebolla",
        "peso":224.1,
        "tipo de carne":"burger",
        "pagina del producto":"https://www.burgerking.es/carta/menus/menu-parrilla/menu-big-king",
        "lechuga":true,
        "fecha":"2021-06-23"
    },
    {
        "precio":9,
        "imagen":"https://gps.burgerkingencasa.es/images/products/1575530622161_Menu_Crispy_Chicken.png",
        "nombre":"Crispy chicken",
        "ingredientes":"Pollo, lechuga, tomate y mayonesa",
        "peso":189.1,
        "tipo de carne":"pollo",
        "pagina del producto":"https://www.burgerking.es/carta/menus/menu-pollo/menu-crispy-chicken",
        "lechuga":true,
        "fecha":"2021-02-02"
    },
    {
        "precio":13,
        "imagen":"https://gps.burgerkingencasa.es/images/products/1575463162266_Menu_The_King_Bacon(2_carnes).png",
        "nombre":"The king bacon",
        "ingredientes":"Carne whopper, queso, bacon, tomate y mayonesa de bacon",
        "peso":341.6,
        "tipo de carne":"whopper",
        "pagina del producto":"https://www.burgerking.es/carta/menus/menu-parrilla/menu-the-king-bacon",
        "lechuga":false,
        "fecha":"2021-12-04"
    },
    {
        "precio":11,
        "imagen":"https://gps.burgerkingencasa.es/images/products/1575463469428_Menu_Steakhouse.png",
        "nombre":"Menú steakhouse",
        "ingredientes":"Carne whopper, lechuga, queso, bacon, tomate, cebolla frita, salsa barbacoa y mayonesa",
        "peso":300.3,
        "tipo de carne":"whopper",
        "pagina del producto":"https://www.burgerking.es/carta/menus/menu-parrilla/menu-steakhouse",
        "lechuga":true,
        "fecha":"2021-01-15"
    },
    {
        "precio":15,
        "imagen":"https://gps.burgerkingencasa.es/images/products/1637071084151_campesina-1c.png",
        "nombre":"Originals campesina",
        "ingredientes":"Huevo trufado, grana padano, salsa boletus, canónigos y rúcula",
        "peso":275.7,
        "tipo de carne":"originals",
        "pagina del producto":"https://www.burgerking.es/carta/menus/originals/originals-campesina-1-carne",
        "lechuga":false,
        "fecha":"2021-07-18"
    },
    {
        "precio":15,
        "imagen":"https://gps.burgerkingencasa.es/images/products/1637072000110_mediterranea-2c.png",
        "nombre":"Originals mediterránea",
        "ingredientes":"Tomate seco, salsa parmesano, grana padano, canónigos y rúcula",
        "peso":300.5,
        "tipo de carne":"originals",
        "pagina del producto":"https://www.burgerking.es/carta/menus/originals/originals-mediterranea-2-carnes",
        "lechuga":false,
        "fecha":"2021-03-30"
    },
    {
        "precio":8,
        "imagen":"https://gps.burgerkingencasa.es/images/products/1596129840157_Menu_Doble_Chees_Burger_BBQ.png",
        "nombre":"Doble cheese burger bbq",
        "ingredientes":"Queso, pepinillo, carne burger y salsa barbacoa",
        "peso":156.4,
        "tipo de carne":"burger",
        "pagina del producto":"https://www.burgerking.es/carta/menus/menu-parrilla/menu-doble-cheese-burger-bbq",
        "lechuga":false,
        "fecha":"2021-10-21"
    }
];