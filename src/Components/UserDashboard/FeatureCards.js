import React from 'react';
import './FeatureCards.css';

const FeatureCards = () => {
  return (
    <>
    <h1>Recently added</h1>
    <section className="feature-cards">
      
      <div className="card">
        <h3>Poll 1</h3>
        <button style={{marginRight:"10px"}}>delete</button>
        <button>Update</button>
        
      </div>
      <div className="card">
        <h3>Poll 2</h3>
        <button style={{marginRight:"10px"}}>delete</button>
        <button>Update</button>
        </div>
      <div className="card">
        <h3>Poll 3</h3>
        <button style={{marginRight:"10px"}}>delete</button>
        <button>Update</button>
      </div>
    </section>
    </>
  );
};

export default FeatureCards;
