import React from 'react';

function Archive({ archivedPosts }) {
    return (
        <section className="archive">
            <h1>Архив</h1>
            <ul id="archiveList">
                {archivedPosts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        </section>
    );
}

export default Archive;
