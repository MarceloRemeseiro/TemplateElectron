import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function Hello() {
  return (
    <div className="h-screen flex justify-center bg-gray-200">
      <div className="text-blue-500 text-center text-5xl">
        <h1>TEMPLATE </h1>
        <h1>ELECTRON </h1>
        <h1>REACT</h1>
        <h1>TAILWIND</h1>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
