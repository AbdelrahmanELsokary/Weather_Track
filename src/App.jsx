import { useState } from 'react';
import './App.css';
import { Home } from './components/pages/home/Home';
import { Header } from './components/layout/Header';
function App() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const api = `https://api.weatherapi.com/v1/forecast.json?key=88a9fc86342d4d63a98185704230712&q=${location}&days=7&aqi=yes&alerts=yes`;
  // console.log(data);
  async function getData() {
    setLoading(true);
    try {
      const response = await fetch(api);
      const backData = await response.json();
      setData(backData);
    } catch {
      console.error('error');
    } finally {
      setLoading(false);
    }
  }
  // console.log(data);
  return (
    <>
      <Header setLocation={setLocation} onClick={getData} />
      <Home data={data} loading={loading} />
    </>
  );
}

export default App;
