const heroes=[{
    nombre: 'Diana Prince',
    imagen: './images/Mujer Maravilla.jpg',
    nombreClave: 'Wonder Woman',
    casa: 'DC',
    anoAparicion: 1941,
    descripcion: 'Guerrera amazona con fuerza y habilidades divinas.',
    fullDescripcion: 'Diana Prince es una princesa amazona del mítico reino de Themyscira. Hija de Hipólita y creada por los dioses, Wonder Woman dejó su hogar para defender la humanidad con su fuerza sobrehumana, lazos mágicos y un profundo sentido de justicia y paz.'
  },
  {
    nombre: 'Natasha Romanoff',
    imagen: './images/Black Widow.jpg',
    nombreClave: 'Black Widow',
    casa: 'Marvel',
    anoAparicion: 1964,
    descripcion: 'Espía experta y luchadora altamente entrenada.',
    fullDescripcion: 'Natasha Romanoff, conocida como Black Widow, es una ex espía de élite de la KGB que se convirtió en miembro fundamental de los Vengadores. Su inteligencia, agilidad, dominio del combate cuerpo a cuerpo y valentía la hacen una heroína formidable, decidida a redimirse por su oscuro pasado.'
  },
  {
    nombre: 'Carol Danvers',
    imagen: './images/Capitana Marvel.jpg',
    nombreClave: 'Captain Marvel',
    casa: 'Marvel',
    anoAparicion: 1968,
    descripcion: 'Piloto con poderes cósmicos que protege el universo.',
    fullDescripcion: 'Carol Danvers, también conocida como Captain Marvel, es una ex piloto de la Fuerza Aérea que obtuvo poderes extraordinarios tras un accidente con tecnología alienígena. Su fuerza, vuelo y capacidad de absorber y proyectar energía la convierten en una de las heroínas más poderosas del universo Marvel.'
  },
  {
    nombre: 'Jean Grey',
    imagen: './images/Jean Grey.jpg',
    nombreClave: 'Phoenix',
    casa: 'Marvel',
    anoAparicion: 1963,
    descripcion: 'Mutante con poderes psíquicos y telequinéticos masivos.',
    fullDescripcion: 'Jean Grey es una poderosa mutante con habilidades telepáticas y telequinéticas. Como huésped de la Fuerza Fénix, alcanza niveles cósmicos de poder. Su lucha interna entre el bien y el mal la convierte en una de las figuras más complejas del universo X-Men.'
  },
  {
    nombre: 'Barbara Gordon',
    imagen: './images/Batgirl.jpg',
    nombreClave: 'Batgirl',
    casa: 'DC',
    anoAparicion: 1967,
    descripcion: 'Aliada de Batman con gran inteligencia y habilidades de combate.',
    fullDescripcion: 'Barbara Gordon, hija del comisionado Gordon, adopta la identidad de Batgirl para luchar contra el crimen en Gotham. Su inteligencia, dominio de las artes marciales y habilidades tecnológicas la convierten en una pieza clave dentro de la Batfamilia, incluso tras su transformación en Oracle.'
  },
  {
    nombre: 'Ororo Munroe',
    imagen: './images/Storm.jpg',
    nombreClave: 'Storm',
    casa: 'Marvel',
    anoAparicion: 1975,
    descripcion: 'Mutante capaz de controlar el clima.',
    fullDescripcion: 'Ororo Munroe, también conocida como Storm, es una mutante con el poder de manipular el clima. Criada como una diosa en África, se convirtió en una líder respetada de los X-Men, destacando por su sabiduría, temple y capacidad de liderazgo.'
  },
  {
    nombre: 'Zatanna Zatara',
    imagen: './images/Zatanna.jpg',
    nombreClave: 'Zatanna',
    casa: 'DC',
    anoAparicion: 1964,
    descripcion: 'Hechicera poderosa con habilidades mágicas.',
    fullDescripcion: 'Zatanna es una ilusionista profesional y una de las magas más poderosas del universo DC. Hija del mago Giovanni Zatara, lanza hechizos pronunciándolos al revés. Su valentía y compromiso con el bien la han llevado a ser miembro clave de la Liga de la Justicia Dark.'
  }
];

//let guardarelfiltro = heroes.name.includes(searchTerm)


class searchBar extends HTMLElement{
    constructor() {
        super();
        this.searchTerm=""
        const shadow = this.attachShadow({mode:'open'});

        const searchContainer = document.createElement('nav');
        searchContainer.id = 'searchContainer';
        searchContainer.innerHTML = /*html*/`
        <label id="searchLabel" for="searchInput">Buscar</label>
        <input id="searchInput" type="text" placeholder="Buscar heroe...">
        <button id="searchButton"><span class="material-symbols-outlined">search</span></button>
        `
        const searchStyle= document.createElement('style');
        searchStyle.textContent=`
        #searchContainer{
            width: 90vw;
            background-color: #282828;
            opacity: 1.5;
            box-shadow:4px 4px 4px #757575;
            margin-top: 10px;
            margin-bottom: 35px;
            padding: 10px;
            border-radius: 20px;
            color: #cacaca;
            display: flex;
            gap: 15px;
            justify-self: center;
            justify-content: center;
        }
        #searchLabel{
            padding: 5px;
            font-size: 1.3rem;
            padding-left: 2%;
            color: #d3d6de;
        }
        #searchInput{
            background-color: #d3d6de;
            padding: 3px;
            width: 60vw;
            font-size: 1rem;
            border: 1px solid #d3d6de;
            border-radius: 10px;
            padding-left: 10px;
        }
        #searchButton{
            background-color: #d3d6de;
            width: 15vw;
            border-radius: 10px;
            border: 1px solid #d3d6de;
        }
        #searchButton:hover{
            background-color: #757575;
            transition: 200ms;
        }
        .material-symbols-outlined {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;  /* Tamaño preferido para los iconos */
            display: inline-block;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            white-space: nowrap;
            direction: ltr;
        }
        @media (max-width: 600px) {
        #searchContainer {
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        #searchInput {
            width: 80vw;
        }
        #searchButton {
            width: 60vw;
        }`
        shadow.append(searchStyle, searchContainer);
        this.shadowRoot.querySelector('#searchInput').addEventListener('input', () => {
        const searchTerm = this.shadowRoot.querySelector('#searchInput').value.trim().toLowerCase();
        const infoCardsElement = document.querySelector('info-cards');
        const cards = infoCardsElement.shadowRoot.querySelectorAll('#card');

        cards.forEach(card => {
            const nombre = card.getAttribute('data-nombre');
            if (nombre.includes(searchTerm)) {
                card.style.display = 'flex'; 
            } else {
                card.style.display = 'none'; 
            }
            });
    })}
}
customElements.define('search-bar',searchBar);

class infoCards extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});
        heroes.forEach(heroe=>{
            const card= document.createElement('div');
            card.id='card';
            card.innerHTML=/*html*/`
                <h2 id="name">${heroe.nombre}</h2>
                <div class="heroImgContainer">
                    <img id="heroImg" src="${heroe.imagen}" alt="imagen de ${heroe.nombreClave}">
                </div>
                <p><strong>Nombre Clave:</strong> ${heroe.nombreClave}</p>
                <p><strong>Casa:</strong>${heroe.anoAparicion}</p>
                <p><strong>Descripción:</strong> ${heroe.descripcion}</p>
                <button class='btnVerMas' id="btnVerMas" data-nombre=${heroe.nombre}>Ver más</button>`
            const cardStyle= document.createElement('style');
            cardStyle.textContent=`
                info-cards{
                    display: grid;
                    grid-template-columns: repeat(3,30%);
                }
                #card{
                    text-align: center;
                    background-color: #d3d6de;
                    opacity: 0.9;
                    box-shadow: 5px 5px 10px #757575;
                    padding: 15px;
                    font-size: 1.1rem;
                    border-radius: 10px;
                    width: 22vw;
                    border: 1.7px solid #282828;
                    overflow-x: auto;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 3vh;
                }
                #card img{
                    border: 2px solid black;
                    margin-left: 1vw;
                    margin-right: 1vw;
                    margin-bottom:1.4vh;
                    max-width: 20vw;
                    max-height: 30vw;
                }
                p{
                    margin: 0.3vh;
                }
                #btnVerMas{
                    background-color: #282828;
                    opacity: 2.8;
                    margin-top: 1.4vh;
                    color: #cacaca;
                    font-size: 1rem;
                    width: 22vw;
                }
                                
                `
            shadow.append(cardStyle, card);
            card.setAttribute('data-nombre', heroe.nombre.toLowerCase());
        });
    };
}
document.querySelectorAll('.btnVerMas').forEach(showMore =>{
    showMore.addEventListener('click', () =>{
        const showMoreHero = showMore.closest('.btnVerMas').getAttribute('data-nombre');
        showMoreDetails(showMoreHero);
    })
})
customElements.define('info-cards', infoCards);
class vmHeroeCards extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});
        heroes.forEach(heroe=>{
            const modal =document.createElement('div');
            modal.id='modal';
            modal.innerHTML=/*html*/`
            <div class="container">
                <div class="imgSide">
                    <img id="heroImg" src="./images/Mujer Maravilla.jpg" alt="imagen de ${heroe.nombreClave}">
                </div>
                <div class="textSide">
                    <h2 id="name">${heroe.nombre}</h2>
                    <p><strong>Nombre Clave:</strong> ${heroe.nombreClave}</p>
                    <p><strong>Casa:</strong>${heroe.anoAparicion}</p>
                    <p><strong>Descripción:</strong> ${heroe.descripcion}</p>
                </div>
                <div class="fullDescriptionSide">
                    <p><strong>Casa:</strong>${heroe.fullDescripcion}</p>
                    <button id="btnSalir">Salir</button>
                </div>
            </div>`
            const modalStyle=document.createElement('style');
            modalStyle.textContent=`
            #modal{
                height: 100%;
                width: 100%;  
                display: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: rgba(100, 100, 100, 0.7);
            }
            .container {
                display: grid;
                grid-template-areas: 
                    "image text"
                    "button button";
                border: 2px solid #282828;
                background-color: #d3d6de;
                border-radius: 15px;
                width: 70%;
                height: 55%;
                padding: 2rem;
            }
            .textSide {
                background-color: blue;
                color: rgb(0, 0, 0);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                grid-area: text;
                width: 50%;
                align-self: center;
                justify-self: center;
            }
            .imgSide{
                background-color: rgba(100, 20, 139, 0.7);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                grid-area: image;
                width: 50%;
                align-self: center;
                justify-self: center;
            }
            .imgSide #heroImg{
                height: 25rem;
                border: 2px solid black;
                border-radius: 15px;
            }
            .fullDescriptionSide{
                background-color: rgba(100, 20, 139, 0.7);
                display: flex;   
                grid-area: button;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 50%;
                align-self: center;
                justify-self: center;

            }`
            shadow.append(modalStyle, modal);

        })
    }
}
customElements.define('vm-hero-cards', vmHeroeCards);
//hacer busqueda
//boton de ver mas
