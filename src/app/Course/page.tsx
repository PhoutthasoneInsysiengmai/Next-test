import Image from "next/image";

export default function Course() {
  return (
    <div className="flex justify-center  mt-4">
      
      <table className="border-collapse border border-red-500 w-1/2 text-center">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="border border-white p-2">ຫລັກສູດ</th>
            <td className="border border-red-500 p-2">Data</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-red-500 p-2">1</td>
            <td className="border border-red-500 p-2">ITBM</td>
          </tr>
          <tr>
            <td className="border border-red-500 p-2">2</td>
            <td className="border border-red-500 p-2">ITBM</td>
          </tr>
          <tr>
            <td className="border border-red-500 p-2">3</td>
            <td className="border border-red-500 p-2">ITBM</td>
          </tr>
        </tbody>
      </table>

      <table className="border-collapse border border-red-500 w-1/2 text-center">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="border border-white p-2">ຫລັກສູດ</th>
            <td className="border border-red-500 p-2">Data</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-red-500 p-2">1</td>
            <td className="border border-red-500 p-2">ITBM</td>
          </tr>
          <tr>
            <td className="border border-red-500 p-2">2</td>
            <td className="border border-red-500 p-2">ITBM</td>
          </tr>
          <tr>
            <td className="border border-red-500 p-2">3</td>
            <td className="border border-red-500 p-2">ITBM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
