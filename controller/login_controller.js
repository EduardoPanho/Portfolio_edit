document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'eumesmo' && password === '3spirro') {
        window.location.href = './../cards.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
});
