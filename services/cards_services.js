const API_URL = "https://back-end-teal-rho.vercel.app/";

// 🔹 GET – Buscar todos os projetos
export async function getBdCardsProjects() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Erro HTTP ${response.status}`);
    const dados = await response.json();
    return dados;
  } catch (e) {
    console.log(`Erro: ${e.message}`);
    return [];
  }
}

// 🔹 POST – Criar novo projeto
export async function postBdCardsProjects(titulo, data, img) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, data, img })
    });

    if (!response.ok) throw new Error(`Erro HTTP ${response.status}`);

    const dados = await response.json();
    alert(`Projeto criado com ID: ${dados.id}`);
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  }
}

// 🔹 PUT – Atualizar projeto pelo ID
export async function putBdCardsProjects(id, titulo, data, img) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo, data, img })
    });

    if (!response.ok) throw new Error(`Erro HTTP ${response.status}`);

    const dados = await response.json();
    alert(dados.message);
  } catch (e) {
    console.log(`Erro: ${e.message}`);
  }
}

// 🔹 DELETE – Deletar projeto pelo ID
export async function deleteBdCardsProjects(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });

    if (!response.ok) throw new Error(await response.text());

    const dados = await response.json();
    alert(dados.message);
  } catch (e) {
    console.log(`Erro ao deletar: ${e.message}`);
    alert('Erro ao deletar projeto.');
  }
}
