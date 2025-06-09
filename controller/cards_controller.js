import { createCards } from "../view/js/create_cards.js";

document.addEventListener('DOMContentLoaded', () => {
    createCards();
    
});

function animateAndReload(button) {
    button.classList.add('animate-send');

    button.addEventListener('animationend', function onAnimEnd(e) {
        if (e.animationName === 'enviarAnim') {
            button.removeEventListener('animationend', onAnimEnd);
            location.reload();
        }
    });
}

document.getElementById('adicionar').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name_create = document.getElementById('name_create').value.trim();
    const date_create = document.getElementById('date_create').value;
    const img_create = document.getElementById('img_create').value.trim();
    const button = event.target.querySelector('button.button');

    if (!name_create || !date_create || !img_create) {
        alert("Erro! Todos os campos devem ser preenchidos.");
        return;
    }

    const projeto = {
        titulo: name_create,
        data: date_create,
        img: img_create
    };

    try {
        const response = await fetch('https://back-end-teal-rho.vercel.app/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(projeto)
        });

        if (!response.ok) throw new Error(await response.text());

        alert('Projeto criado com sucesso!');
    } catch (err) {
        console.error(err);
        alert('Erro ao criar projeto: ' + err.message);
    }
});

document.getElementById('deletar').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id_delete = document.getElementById('id_delete').value.trim();
    const button = event.target.querySelector('button');

    if (!id_delete) {
        alert("Erro! Informe o ID.");
        return;
    }

    try {
        const response = await fetch(`https://back-end-teal-rho.vercel.app//${id_delete}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error(await response.text());

        alert('Projeto deletado com sucesso!');
        animateAndReload(button);
    } catch (err) {
        console.error(err);
        alert('Erro ao deletar projeto: ' + err.message);
    }
});


document.getElementById('atualizar').addEventListener('submit', async (event) => {
    event.preventDefault();

    const id_att = document.getElementById('id_att').value.trim();
    const date_att = document.getElementById('date_att').value.trim();
    const img_att = document.getElementById('img_att').value.trim();
    const button = event.target.querySelector('button');

    if (!id_att || !date_att || !img_att) {
        alert("Erro! Todos os campos devem ser preenchidos.");
        return;
    }

    const dadosAtualizados = {
        id: id_att,
        data: date_att,
        img: img_att
    };

    try {
        const response = await fetch(`https://back-end-teal-rho.vercel.app//${id_att}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosAtualizados)
        });

        if (!response.ok) throw new Error(await response.text());

        alert('Projeto atualizado com sucesso!');
        animateAndReload(button); //
    } catch (err) {
        console.error(err);
        alert('Erro ao atualizar projeto: ' + err.message);
    }
});

function handleButtonAnimation(button) {
    const defaultState = button.querySelector(".state--default");
    const sentState = button.querySelector(".state--sent");

    // Ativa o estado enviado
    defaultState.style.display = "none";
    sentState.style.display = "flex";

    setTimeout(() => {
        sentState.style.display = "none";
        defaultState.style.display = "flex";
    }, 2000);
}
