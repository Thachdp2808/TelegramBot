import './App.css';
import WebApp from '@twa-dev/sdk';
import axios from 'axios';

function App() {
  const userData = WebApp.initData;
  const botToken = 'Bot_Token';
  const handleLogin = () => {
    WebApp.ready();
    const login = async () => {
      try {
        const res = await axios.post(
          'http://localhost:8000/api/v1/auth/verify-telegram',
          {
            queryString: userData,
            botToken: botToken,
          }
        );
        return res;
      } catch (error) {
        console.error('Error during login:', error);
        throw error;
      }
    };

    login()
      .then((res) => {
        if (res.status === 201) {
          console.log('Login successful:');
          WebApp.openLink('https://www.google.com/');
        }
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <h1>Login</h1>
    </>
  );
}

export default App;
