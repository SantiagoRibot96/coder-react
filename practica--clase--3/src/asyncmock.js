const misProductos = [
    {id:1 , nombre: "Barbacoa Argentina", precio: 10000, img: "https://www.todoparrillas.com.ar/img/labarba-big.png"},
    {id:2 , nombre: "Portatil", precio: 8000, img: "https://www.todoparrillas.com.ar/img/portatil-hero.png"},
    {id:3 , nombre: "QBO", precio: 15000, img: "https://www.todoparrillas.com.ar/img/hero-bbq.png"},
    {id:4 , nombre: "Flama", precio: 20000, img: "https://www.todoparrillas.com.ar/img/product-2-1.jpg"}
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000);
    });
}