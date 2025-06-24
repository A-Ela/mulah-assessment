import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Table1 from './components/Table1';
import Table2 from './components/Table2';

function App() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    Papa.parse('/Table_Input.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setCsvData(results.data.filter(row => row["Index #"]));
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <main className="max-w-4xl mx-auto px-4 py-8">
        {csvData.length > 0 ? (
          <>
            <Table1 data={csvData} />
            <Table2 data={csvData} />
          </>
        ) : (
          <p className="text-center text-lg">Loading CSV data...</p>
        )}
      </main>
    </div>
  );
}

export default App;
