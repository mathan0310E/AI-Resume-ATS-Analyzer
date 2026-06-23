import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function SkillPieChart({
  matchedSkills = [],
  missingSkills = []
}) {

  const data = [
    {
      name: "Matched",
      value: matchedSkills.length
    },
    {
      name: "Missing",
      value: missingSkills.length
    }
  ];

  const COLORS = [
    "#22c55e",
    "#ef4444"
  ];

  return (
    <div className="h-80">

      <ResponsiveContainer>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >

            {data.map(
              (entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              )
            )}

          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default SkillPieChart;