import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '/components/Navbar';
import HomePage from '/pages/HomePage';
import SearchPage from '/pages/SearchPage';
import DetailsPage from '/pages/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
