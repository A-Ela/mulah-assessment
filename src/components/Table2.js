import React from 'react';

export default function Table2({ data }) {
  const getValue = (label) => parseInt(data.find(r => r["Index #"] === label)?.Value || 0);

  const alpha = getValue("A5") + getValue("A20");
  const beta = (getValue("A15") / getValue("A7")).toFixed(2);
  const charlie = getValue("A13") * getValue("A12");

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#3F4F44] border-b-2 border-[#A27B5C] mb-4">Table 2</h2>
      <table className="w-full border border-gray-300 rounded-md shadow-sm">
        <thead className="bg-[#FFFF] text-black">
          <tr>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white hover:bg-gray-50">
            <td className="py-2 px-4 border">Alpha</td>
            <td className="py-2 px-4 border">{alpha}</td>
          </tr>
          <tr className="bg-white hover:bg-gray-50">
            <td className="py-2 px-4 border">Beta</td>
            <td className="py-2 px-4 border">{beta}</td>
          </tr>
          <tr className="bg-white hover:bg-gray-50">
            <td className="py-2 px-4 border">Charlie</td>
            <td className="py-2 px-4 border">{charlie}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
