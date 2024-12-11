import React from 'react';
import './Blogs.scss';

const Blogs = () => {
  const blogs = [
    {
      title: 'Dash for Beginners!',
      description: 'Attention! If you are looking for a way to represent your analytics in a graphical manner, then Dash is the answer! Dash is a python framework mainly used for building data visualization...',
      link: '#'
    },
    {
      title: 'LSTM in Text Classification',
      description: 'Abstract: With an increasing field of deep learning, particularly in natural language processing, text classification has evolved to be easier. As you start exploring the field of deep learning...',
      link: '#'
    }
  ];

  return (
    <section className="blogs" id="blogs">
      <h2>Blogs</h2>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <a href={blog.link} className="read-more">Read →</a>
          </div>
        ))}
      </div>
      <div className="blog-links">
        <a href="#" className="more-medium">More Medium Blogs</a>
        <a href="#" className="more-blogs">More All Blogs</a>
      </div>
    </section>
  );
};

export default Blogs; 