document.getElementById('adicionar').addEventListener('submit', (event) => {
    event.preventDefault();

    const name_create = document.getElementById('name_create').value;
    const date_create = document.getElementById('date_create').value;
    const img_create = document.getElementById('img_create').value;

    if (!name_create || !date_create || !img_create) {
        alert("Erro! Todos os campos devem ser preenchidos.");
        return;
    }

    alert(`Nome: ${name_create}\nData: ${date_create}\nImagem: ${img_create}`);

    const button = event.target.querySelector('button.button');
    button.classList.add('animate-send');

    button.addEventListener('animationend', function onAnimEnd(e) {
        if (e.animationName === 'enviarAnim') {
            button.removeEventListener('animationend', onAnimEnd);
            location.reload();
        }
    });
});

document.getElementById('deletar').addEventListener('submit', (event) => {
    event.preventDefault();

    const id_delete = document.getElementById('id_delete').value;

    if (!id_delete) {
        alert("Erro! Informe o ID.");
        return;
    }

    alert(`ID: ${id_delete}`);

    const button = event.target.querySelector('button');
    button.classList.add('animate-send');

    button.addEventListener('animationend', function onAnimEnd(e) {
        if (e.animationName === 'enviarAnim') {
            button.removeEventListener('animationend', onAnimEnd);
            location.reload();
        }
    });
});

document.getElementById('atualizar').addEventListener('submit', (event) => {
    event.preventDefault();

    const id_att = document.getElementById('id_att').value;
    const name_att = document.getElementById('name_att').value;
    const date_att = document.getElementById('date_att').value;
    const img_att = document.getElementById('img_att').value;

    if (!id_att || !name_att || !date_att || !img_att) {
        alert("Erro! Todos os campos devem ser preenchidos.");
        return;
    }

    alert(`Nome: ${name_att}\nData: ${date_att}\nImagem: ${img_att}\nID: ${id_att}`);

    const button = event.target.querySelector('button');
    button.classList.add('animate-send');

    button.addEventListener('animationend', function onAnimEnd(e) {
        if (e.animationName === 'enviarAnim') {
            button.removeEventListener('animationend', onAnimEnd);
            location.reload();
        }
    });
});
