import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';

function App() {
  const [viewMode, setViewMode] = useState('all');
  const [showNotification, setShowNotification] = useState(true);

  let activeComponent = null;
  if (viewMode === 'book') {
    activeComponent = <BookDetails />;
  } else if (viewMode === 'blog') {
    activeComponent = <BlogDetails />;
  } else if (viewMode === 'course') {
    activeComponent = <CourseDetails />;
  } else {
    activeComponent = (
      <div>
        <BookDetails />
        <BlogDetails />
        <CourseDetails />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '750px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '0 20px' }}>
      <h1>Blogger Management Portal</h1>

      {showNotification && (
        <div style={{ padding: '10px', backgroundColor: '#e2e3e5', borderRadius: '5px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <span>Notice: Switch tabs to test dynamic conditional rendering methods!</span>
          <button onClick={() => setShowNotification(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}>X</button>
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setViewMode('all')} style={{ marginRight: '10px', padding: '8px 12px' }}>Show All</button>
        <button onClick={() => setViewMode('book')} style={{ marginRight: '10px', padding: '8px 12px' }}>Books Only</button>
        <button onClick={() => setViewMode('blog')} style={{ marginRight: '10px', padding: '8px 12px' }}>Blogs Only</button>
        <button onClick={() => setViewMode('course')} style={{ padding: '8px 12px' }}>Courses Only</button>
      </div>

      <h2>
        Displaying: {viewMode === 'all' ? 'All Content' : `${viewMode.toUpperCase()} Component`}
      </h2>
      
      {activeComponent}
    </div>
  );
}

export default App;
