import { getBdCardsProjects, deleteBdCardsProjects } from "../../services/cards_services.js";

export async function createCards() {
    let cards_section = document.getElementById('cards');
    cards_section.innerHTML = '';

    const bd_cards_projetos = await getBdCardsProjects();

    bd_cards_projetos.map((card_bd, index) => {
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.src = card_bd.img;

        let titulo = document.createElement('h1');
        titulo.textContent = card_bd.titulo;

        let data = document.createElement('h3');
        data.textContent = card_bd.data;

        let att = document.createElement("button");
        att.className = 'att_button';
        att.innerHTML = '<i class="fas fa-edit"></i>';


        let button = document.createElement('button');
        button.className = 'del_button';

        button.addEventListener('click', async () => {
            try {
                await deleteBdCardsProjects(card_bd.id);
                card.remove();
                alert('Projeto deletado com sucesso!');
            } catch (e) {
                alert('Erro ao deletar projeto: ' + e.message);
            }
        });

        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(data);
        card.appendChild(button);
        card.appendChild(att);

        cards_section.appendChild(card);
    });

}