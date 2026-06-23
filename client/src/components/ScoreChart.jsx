import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

import {
  useEffect,
  useState
} from "react";

import api
from "../services/api";

function ScoreChart() {

  const [data,
  setData] = useState([]);

  useEffect(() => {

    fetchChart();

  }, []);

  const fetchChart =
  async () => {

    try {

      const res =
        await api.get(
          "/chart"
        );

      setData(
        res.data
      );

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div
      style={{
        width: "100%",
        height: 350
      }}
    >

      <ResponsiveContainer>

        <LineChart
          data={data}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="date"
          />

          <YAxis
            domain={[0,100]}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default ScoreChart;