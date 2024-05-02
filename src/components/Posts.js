import React from 'react';

function Posts({ posts, onDelete, onArchive }) {
    return (
        <section className="post-list component">
            <h1>Записи</h1>
            <div id="posts" className={posts.length ? '' : 'empty'}>
                {posts.map((post, index) => (
                    <article key={index}>
                        <div className="post-content">
                            <h1>{post.title}</h1>
                            <p>Категория: {post.category}</p>
                            <p>Автор: {post.author}</p>
                            <p>{post.content}</p>
                        </div>
                        <div className="button-container">
                            <button className="delete-btn" onClick={() => onDelete(index)}>Удалить</button>
                            <button className="archive-btn" onClick={() => onArchive(index)}>Архив</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Posts;
