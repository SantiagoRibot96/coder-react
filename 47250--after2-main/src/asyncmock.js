const misProductos = [
    { id: "1", nombre: "Yerba", precio: 500, img: "./img/yerba.jpg", idCat:"2" },
    { id: "2", nombre: "Fideos", precio: 200, img: "./img/fideos.jpg", idCat:"2" },
    { id: "3", nombre: "Arroz", precio: 300, img: "./img/arroz.jpg", idCat:"3" },
    { id: "4", nombre: "Aceite", precio: 900, img: "./img/aceite.jpg", idCat:"3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 500)
    })
}


/*Actividad n° 3 Detalle de un Producto I */

/*Creamos una función similar a la anterior pero que solo nos retorne un solo item*/

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
}

/* Creamos una funcion que retorne toda una categoria */

export const getUnaCategoria = (idCat) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.isCat === idCat);
            resolve(productosCategoria);
        }, 500)
    })
}