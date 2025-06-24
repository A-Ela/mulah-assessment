import React from 'react';

export default function Table1({ data }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-[#3F4F44] border-b-2 border-[#A27B5C] mb-4">Table 1</h2>
      <table className="w-full border border-gray-300 rounded-md shadow-sm">
        <thead className="bg-[#FFFF] text-black">
          <tr>
            <th className="py-2 px-4 border">Index #</th>
            <th className="py-2 px-4 border">Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="bg-white hover:bg-gray-50">
              <td className="py-2 px-4 border">{row["Index #"]}</td>
              <td className="py-2 px-4 border">{row["Value"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
