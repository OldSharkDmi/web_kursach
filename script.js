document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const content = document.getElementById('content').value;

    if (!title || !category || !author || !content) {
        alert("Все поля должны быть заполнены!");
        return;
    }

    const article = document.createElement('article');
    article.innerHTML = `
        <h1>${title}</h1>
        <p>Категория: ${category}</p>
        <p>Автор: ${author}</p>
        <p>${content}</p>
        <button class="delete-btn">Удалить</button>
        <button class="archive-btn">Архив</button>
    `;

    article.querySelector('.delete-btn').addEventListener('click', function() {
        article.remove();
    });

    article.querySelector('.archive-btn').addEventListener('click', function() {
        const archiveItem = document.createElement('li');
        archiveItem.textContent = title;
        document.getElementById('archiveList').appendChild(archiveItem);
        article.remove();
    });

    document.getElementById('posts').appendChild(article);
    document.getElementById('posts').classList.remove('empty');

    document.getElementById('title').value = '';
    document.getElementById('category').value = '';
    document.getElementById('author').value = '';
    document.getElementById('content').value = '';
});
