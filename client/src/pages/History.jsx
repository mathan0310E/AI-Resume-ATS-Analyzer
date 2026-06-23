import { useEffect, useState }
from "react";

import Navbar
from "../components/Navbar";

import api
from "../services/api";

function History() {

  const [history,
  setHistory] = useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory =
  async () => {

    try {

      const res =
      await api.get(
        "/history"
      );

      setHistory(
        res.data
      );

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Analysis History
        </h1>

        <div className="bg-white rounded-2xl shadow">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-4">
                  Date
                </th>

                <th className="p-4">
                  ATS Score
                </th>

              </tr>

            </thead>

            <tbody>

  {history.length > 0 ? (

    history.map((item) => (

      <tr
        key={item._id}
        className="border-b hover:bg-gray-50"
      >

        <td className="p-4">

          {
            new Date(
              item.createdAt
            ).toLocaleString()
          }

        </td>

        <td
          className={`p-4 font-bold ${
            item.atsScore >= 80
              ? "text-green-600"
              : item.atsScore >= 60
              ? "text-blue-600"
              : "text-red-600"
          }`}
        >
          {item.atsScore}%
        </td>

      </tr>

    ))

  ) : (

    <tr>

      <td
        colSpan="2"
        className="text-center p-6"
      >
        No Analysis History Found
      </td>

    </tr>

  )}

</tbody>

          </table>

        </div>

      </div>

    </>

  );

}

export default History;