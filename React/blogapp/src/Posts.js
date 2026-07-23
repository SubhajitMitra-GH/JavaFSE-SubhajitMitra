import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMsg: ''
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ posts: data.slice(0, 10) });
      })
      .catch(error => {
        this.setState({ hasError: true, errorMsg: error.message });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert(`Error caught in Posts component: ${error}`);
    this.setState({ hasError: true, errorMsg: error.toString() });
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ color: 'red', padding: '20px' }}>Error loading posts: {this.state.errorMsg}</div>;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2>Blog Posts List</h2>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ borderBottom: '1px solid #ddd', paddingBottom: '15px', marginBottom: '15px' }}>
            <h3 style={{ color: '#2c3e50', textTransform: 'capitalize' }}>{post.id}. {post.title}</h3>
            <p style={{ color: '#555' }}>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
