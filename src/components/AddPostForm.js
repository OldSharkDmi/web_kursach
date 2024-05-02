import React, { useState } from 'react';

function AddPostForm({ onAddPost }) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddPost({ author, title, category, content });
        setAuthor('');
        setTitle('');
        setCategory('');
        setContent('');
    };

    return (
        <section className="create-post component">
            <h1 style={{ color: 'black', borderBottom: '3px solid #07b148' }}>Создать запись</h1>
            <form id="postForm" onSubmit={handleSubmit}>
                <label>Автор</label>
                <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required />
                <label>Заголовок</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
                <label>Категория</label>
                <input type="text" value={category} onChange={e => setCategory(e.target.value)} required />
                <label>Содержание</label>
                <textarea value={content} onChange={e => setContent(e.target.value)} required></textarea>
                <button type="submit">Создать</button>
            </form>
        </section>
    );
}

export default AddPostForm;
