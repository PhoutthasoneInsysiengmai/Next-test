import Image from "next/image";

export default function Course() {
  return (
    <>
      {/* ตารางที่ 1 */}
      <table className="border-collapse border border-red-500 w-full text-center">
        <thead>
          <tr className="bg-red-500 text-white">
            <th className="border border-white p-2">ຫລັກສູດ</th>
            <th className="border border-white p-2">1</th>
            <th className="border border-white p-2">2</th>
            <th className="border border-white p-2">3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-red-500 p-2">Data</td>
            <td className="border border-red-500 p-2">A</td>
            <td className="border border-red-500 p-2">B</td>
            <td className="border border-red-500 p-2">C</td>
          </tr>
        </tbody>
      </table>

      {/* ตารางที่ 2 */}
      <table className="border-collapse border border-gray-500 w-full text-center mt-4">
        <thead>
          <tr className="bg-gray-500 text-white">
            <th className="border border-white p-2">ຫລັກສູດ</th>
            <th className="border border-white p-2">Applicant</th>
            <th className="border border-white p-2">2</th>
            <th className="border border-white p-2">3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-500 p-2">Data</td>
            <td className="border border-gray-500 p-2">X</td>
            <td className="border border-gray-500 p-2">Y</td>
            <td className="border border-gray-500 p-2">Z</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
