/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const url_base ="https://platzi-avo.vercel.app"; 
const url = "https://platzi-avo.vercel.app/api/avo";

const appNote = document.querySelector('#app');
const footerOnes = document.querySelector('.footer-One')
// API Intl - internacionalisacion en ingles
// 1 - Formato a fechas 
// 2 - Formato a monedas
const formatPrice = (price) => {
// usar la API de internacionalizacion se encuenra en ;
const newPrice = new window.Intl.NumberFormat('en-En', {
    style:'currency',
    currency: 'USD',
}).format(price)

    return newPrice;
};



//web api 
//fetch sirve para traer recursos de cualquier sitio web
//Conectarnos al servidor
//procesar la respuesta y convertiral en Json 
//json -> Data -> Renderizar info browser


//Conectarnos al servidor el fetch devuelve una promesa
window.fetch(url)
//procesar la respuesta y convertiral en Json 
.then(respuesta => respuesta.json())
//json -> Data -> Renderizar info browser
.then(responseJson => {
    const todosLosItems = []
    responseJson.data.forEach(item => {
        // crear una imagen
        const imagen = document.createElement('img');
        imagen.src = `${url_base}${item.image}`
        imagen.className = 'h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6'
        // crear un titulo 
        const title = document.createElement('h2');
        title.textContent = item.name
        // usando estilos 
        // title.style = 'font-size: 2rem'
        // title.style.fontSize = '3rem'
        // usando clase y usar el archivo indexedDB.css  
        title.className = 'text-lg' 
        // este proyecto está equipado con tailwind es un framework de CSS
        // 
        
        // crear un precio
        const price = document.createElement('div');
        price.className = 'text-gray-600'
        // para darle formato al precio (moneda) se usara una funcion llamada formatprice
        price.textContent = formatPrice(item.price) 

        
        const priceAndTitle = document.createElement('div')
        priceAndTitle.append(title,price)
        priceAndTitle.className = 'text-center md:text-left'  

        
        const container = document.createElement('div')
        container.append(imagen,priceAndTitle);
        container.className = 'md:flex bg-green-500 sm:min-w-48 rounded-full p-6  hover:bg-green-500 hover:border-black hover:text-white border-2 hover:shadow-md m-1.5'
        todosLosItems.push(container) 
    });
    appNote.append(...todosLosItems)

    document.body.className = 'bg-green-700'

    const footerOne = document.createElement('footer')
    const name = document.createElement('h2')
    name.textContent = 'By Johnnie-LC'
    footerOne.append(name)
    footerOne.className = 'text-center text-xl text-white'
    footerOnes.append(footerOne)
})



// // Con asyn/await
// const anotherFunction = async (url) => { 
//     try{
//         const response = await fetch(url),
//         data = await response.json(),
//         allItems = [];
//         data.data.forEach(element => {
//             console.log(element.name)
//         });
//     }catch(error){
//         console.error(error)
//     }

// }
// anotherFunction(url)