/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

//Web API
const baseUrl = 'https://platzi-avo.vercel.app';
const url = `${baseUrl}/api/avo`;

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
            const image = document.createElement('img');
            image.src = `${baseUrl}${item.image}`;
            //crear titulo
            const title = document.createElement('h1');
            title.textContent = item.name;
            //crear precio
            const price = document.createElement('div');
            price.textContent = item.price;
            
            const container = document.createElement('div');
            container.append(image, title, price);

            allItems.push(container);
        });

        document.querySelector('#app').append(...allItems);
    })


