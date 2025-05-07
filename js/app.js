class searchBar extends HTMLElement{
    constructor() {
        super();
        const shadow = this.attachShadow({mode:'open'});

        const searchContainer = document.createElement('nav');
        searchContainer.id = 'searchContainer';
        searchContainer.innerHTML = /*html*/`
        <label id="searchLabel" for="searchInput">Buscar</label>
        <input id="searchInput" type="text" placeholder="Buscar heroe...">
        <button id="searchButton"><img src="" alt=""></button>
        `
        const searchStyle= document.createElement('style');
        searchStyle.textContent=`
        #searchContainer{
            margin-top: 30px;
            margin-bottom: 20px;
            padding: 10px;
            border-radius: 20px;
            color: #cacaca;
            display: flex;
            gap: 15px;
            align-content: center;
        }
        #searchLabel{
            padding: 5px;
            font-size: 1.2rem;
            padding-left: 4%;
        }
        #searchInput{
            background-color: #d3d6de;
            padding: 3px;
            width: 60vw;
            font-size: 1rem;
            border: 1px solid #d3d6de;
            border-radius: 10px;
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
        }`
        shadow.append(searchStyle, searchContainer);
    }
}
customElements.define('search-bar',searchBar);