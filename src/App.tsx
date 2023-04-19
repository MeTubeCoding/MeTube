import { useEffect } from 'react';
import './App.css';

const App = () => {
  const fetchServerMessage = async () => {
    try {
      const response = await fetch('/');
      const message = await response.text();
      console.log('Server message:', message);
    } catch (error) {
      console.error('Error fetching server message:', error);
    }
  };

  useEffect(() => {
    fetchServerMessage();
  }, []);

  return (
    <div className="App">
      {/* Le contenu de votre application */}
    </div>
  );
};

export default App;
