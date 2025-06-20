import { getBdCardsProjects, deleteBdCardsProjects } from "../../services/cards_services.js";

export async function createCards() {
    let cards_section = document.getElementById('cards');

    cards_section.innerHTML = '';

    const bd_cards_projetos = await getBdCardsProjects();
    console.log(bd_cards_projetos)

    bd_cards_projetos.map((card_bd, index) => {
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.src = card_bd.img;

        let titulo = document.createElement('h1');
        titulo.textContent = card_bd.titulo;

        let data = document.createElement('h3');
        data.textContent = card_bd.data;

        let button = document.createElement('button');
        button.className = 'del_button';

        button.addEventListener('click', async () => {
            console.log(card_bd.uid)
            deleteBdCardsProjects(card_bd.uid)
            createCards();
        });

        let buttonEdit = document.createElement('button');
        buttonEdit.className = 'edit_button';
        buttonEdit.innerHTML = '<i class="fas fa-edit"></i>';
        buttonEdit.addEventListener('click', async () => {
            let input = document.getElementById('id_att');
            input.value = card_bd.uid
        })

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(data);
        card.appendChild(button);
        card.appendChild(buttonEdit);

        cards_section.appendChild(card);
    });

}