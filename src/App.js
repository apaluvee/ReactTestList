import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListProfileComponent from './components/ListProfileComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateProfileComponent from './components/CreateProfileComponent';
import ViewProfileComponent from './components/ViewProfileComponent';
import ListRecordsComponent from './components/ListRecordsComponent';
import CreateRecordsComponent from './components/CreateRecordsComponent';
import ListDataComponent from './components/ListDataComponent';
import CreateDataComponent from './components/CreateDataComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListProfileComponent />} />
            <Route path="/profiles" element={<ListProfileComponent />} />
            <Route path="/records" element={<ListRecordsComponent />} />
            <Route path="/data" element={<ListDataComponent />} />

            <Route path="/add-profile/:id" element={<CreateProfileComponent />} />
            <Route path="/add-record/:id" element={<CreateRecordsComponent />} />
            <Route path="/add-data/:id" element={<CreateDataComponent />} />

            <Route path="/view-profile/:id" element={<ViewProfileComponent />} />
            

          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
