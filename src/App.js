import{useEffect, useState} from "react";
import "./App.css";
import Header from "./Components/Header";


function App() {
  const[posts, setposts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(data => {
      setposts(data);

      
  });
    
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="container">
        
          
            {posts ? (
              
            
          
              posts.map((post) => {
               return (
               
                <div className="card" >
                <div className="card-body">
                <h5  className="card-title">{post.id}</h5>
                <p  className="card-text">{post.name}</p>
                <p  className="card-text">{post.email}</p>
                <p  className="card-text">{post.username}</p>
                <p  className="card-text">{post.website}</p>
                 <p  className="card-text">{post.street}</p>
                
                <a href ="#" className="btn btn-primary">
                 Click Here
                 </a>
              </div>
             </div>
               
            
              
                
               );
               })
              
                
            ) : (
              <h3>Loading......</h3>)
            
            
}

            
        
      </div>
    </div>
  );
  }

export default App;


