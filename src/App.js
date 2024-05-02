import React, { useState } from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import Archive from './components/Archive';
import AddPostForm from './components/AddPostForm';
import './style.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [archivedPosts, setArchivedPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const archivePost = (index) => {
    const post = posts[index];
    setArchivedPosts([...archivedPosts, post]);
    deletePost(index);
  };

  return (
      <div>
        <Header />
        <main style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Posts posts={posts} onDelete={deletePost} onArchive={archivePost} />
          <aside>
            <AddPostForm onAddPost={addPost} />
            <Archive archivedPosts={archivedPosts} />
          </aside>
        </main>
      </div>
  );
}

export default App;
