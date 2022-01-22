/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//Web API
const url = 'https://platzi-avo.vercel.app/api/avo';

//Conetarse al servidor
window
.fetch(url)
//Procesar la respuesta y convertirla al JSON
.then((respuesta) => respuesta.json())
//Json -> data -> Renderizar la información en el browser
.then(respuestaJson => {
    const allItems = [];
    respuestaJson.data.forEach(item => {
            //Crear imagen
            const image = document.createElement('img')
            //crear titulo
            const title = document.createElement('h1')
            //crear precio
            const price = document.createElement('div')
            
            const container = document.createElement('div')
            container.append(image, title, price);

            allItems.push(container);
        });

        document.body.append(...allItems);
    })


