import { bd_cards_projetos } from "./../../controller/cards_controller.js";

let bd_cards_projetos = [
    { titulo: "Safe Haven", preco: "15/03/2025", imagem: "./../assets/Project_Img_1.png" },
    { titulo: "Bandeiras", preco: "29/02/2025", imagem: "./../assets/Project_Bandeiras_Img_2.jpg" },
    { titulo: "Fones de Ouvido JBL T500", preco: "R$ 179,00" },
    { titulo: "Smartwatch Apple Watch Series 8", preco: "R$ 3.999,00" },
    { titulo: "Câmera Digital Canon EOS 90D", preco: "R$ 8.999,00" },
    { titulo: "TV LED 55\" Samsung QLED", preco: "R$ 4.699,00" },
    { titulo: "Micro-ondas Panasonic 20L", preco: "R$ 399,00" },
    { titulo: "Aspirador de Pó Philco 1600W", preco: "R$ 299,00" },
];

export function createCards() {
    let cards_section = document.getElementById('cards');
    
    bd_cards_projetos.map((card_bd, index)=>{
        let card = document.createElement('div');
        card.className = 'card';

        let img = document.createElement('img');
        img.src = card_bd.img;
        let nome = document.createElement('h1');
        nome.textContent = card_bd.nome;
        let linguagem = document.createElement('h3');
        linguagem.textContent = card_bd.linguagem;
        
        card.appendChild(img);
        card.appendChild(nome);
        card.appendChild(linguagem);
        
        cards_section.appendChild(card);
    });

}