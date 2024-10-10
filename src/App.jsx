import React from 'react';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <Card
            image="https://via.placeholder.com/150"
            title="Product 1"
            description="This is a great product."
            price={29.99}
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://via.placeholder.com/150"
            title="Product 2"
            description="Another amazing product."
            price={39.99}
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://via.placeholder.com/150"
            title="Product 2"
            description="Another amazing product."
            price={39.99}
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://via.placeholder.com/150"
            title="Product 2"
            description="Another amazing product."
            price={39.99}
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://via.placeholder.com/150"
            title="Product 2"
            description="Another amazing product."
            price={39.99}
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://via.placeholder.com/150"
            title="Product 2"
            description="Another amazing product."
            price={39.99}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
