const fs = require('fs');
const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('./producto.txt');

(async function(run){
    if(!run) return
    console.log('⭐⭐ Desafio Nº:2 ⭐⭐')

    let producto1 = {       
        title : 'Cerveza heineken 355ml',
        price : 44.56,
        thumbnail : 'https://www.espaciovino.com.ar/media/default/0001/55/thumb_54426_default_medium.jpeg'
    }

    let producto2 = {         
        title : 'Cerveza corona 355ml',
        price : 55.55,
        thumbnail : 'https://xamadi.com/wp-content/uploads/2021/01/Cerveza_Corona_355ml.png'
    }

    let id = await contenedor.save(producto1)
    console.log('El id del elemento insertado es: ', id,'\n')

    id = await contenedor.save(producto2)
    console.log('El id del elemento insertado es:', id,'\n')
    console.log(' 😀 Busca un elemento que aun no existe 😀 ')        
    const data = await contenedor.getAll();
    console.log('Data recuperada desde el archivo:\n', data)    

})(false);

(async function(run){
    if(!run) return    
    let dataById = await contenedor.getById(2);
    console.log(' Elemento recuperado por id:\n',dataById)

    dataById = await contenedor.getById(5);
    console.log('Elemento recuperado por id:\n',dataById)

})(false);


(async function(run){
    if(!run) return    
    let data = await contenedor.getAll();
    console.log('Data recuperada desde el archivo:\n', data)

    console.log('Eliminando todos los elementos 😀 \n')
    await contenedor.deleteAll();

    data = await contenedor.getAll();
    console.log('Data recuperada desde el archivo:\n', data)

})(false);

(async function(run){
    if(!run) return    
    let data = await contenedor.getAll();
    console.log('Data recuperada desde el archivo:\n', data)

    console.log('Eliminando un elemento por id 😀 \n')
    await contenedor.deleteById(4);

    data = await contenedor.getAll();
    console.log('Data recuperada desde el archivo:\n', data)

})(true);