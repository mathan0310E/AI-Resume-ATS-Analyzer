import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ScoreChart from "../components/ScoreChart";
import ATSScoreCard from "../components/ATSScoreCard";

import api from "../services/api";
import { downloadReport } from "../utils/downloadReport";
import { useTheme }
from "../context/ThemeContext";
import SkillPieChart
from "../components/SkillPieChart";
import ATSBadge
from "../components/ATSBadge";

function Dashboard() {

const [file, setFile] = useState(null);
const [jobDescription, setJobDescription] = useState("");
const [loading, setLoading] = useState(false);
const [result, setResult] = useState(null);

const [stats, setStats] = useState({
totalAnalyses: 0,
bestScore: 0,
averageScore: 0
});

const [recentAnalyses, setRecentAnalyses] = useState([]);

useEffect(() => {
fetchStats();
fetchRecentAnalyses();
}, []);

const fetchStats = async () => {
try {
const res = await api.get("/dashboard/stats");
setStats(res.data);
} catch (err) {
console.log(err);
}
};

const fetchRecentAnalyses = async () => {
try {
const res = await api.get("/recent");
setRecentAnalyses(res.data);
} catch (err) {
console.log(err);
}
};

const handleAnalyze = async () => {

if (!file) {
  alert("Please upload a resume");
  return;
}

if (!jobDescription.trim()) {
  alert("Please enter Job Description");
  return;
}

try {

  setLoading(true);

  const formData = new FormData();

  formData.append(
    "resume",
    file
  );

  await api.post(
    "/resume/upload",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data"
      }
    }
  );

  const res = await api.post(
    "/ats/analyze",
    {
      jobDescription
    }
  );

  setResult(
    res.data.atsResult
  );

  fetchStats();
  fetchRecentAnalyses();

} catch (err) {

  console.log(err);
  alert("Analysis Failed");

} finally {

  setLoading(false);

}

};
const {
darkMode
} = useTheme();
const cardClass = darkMode
  ? "bg-slate-800 text-white p-6 rounded-2xl shadow"
  : "bg-white text-black p-6 rounded-2xl shadow";

return (
<> <Navbar />

  <div
  className={`min-h-screen transition-all duration-300 ${
    darkMode
      ? "bg-slate-900 text-white"
      : "bg-slate-100 text-black"
  }`}
>

    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 shadow-lg">

      <h1 className="text-4xl font-bold">
        AI Resume ATS Analyzer
      </h1>

      <p className="mt-2 text-lg">
        Upload Resume → Analyze → Improve ATS Score
      </p>

    </div>

    <div className="p-8">

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className={cardClass}>
          <h2 className="text-gray-500">
            Total Analyses
          </h2>

          <p className="text-4xl font-bold mt-2">
            {stats.totalAnalyses}
          </p>
        </div>

        <div className={cardClass}>
          <h2 className="text-gray-500">
            Best ATS Score
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-2">
            {stats.bestScore}%
          </p>
        </div>

        <div className={cardClass}>
          <h2 className="text-gray-500">
            Average Score
          </h2>

          <p className="text-4xl font-bold text-blue-600 mt-2">
            {stats.averageScore}%
          </p>
        </div>

      </div>

      {/* Upload Resume */}

      <div className={cardClass + " mt-8"}>

        <h2 className="text-2xl font-bold mb-4">
          Resume Analysis
        </h2>

        <label className="block border-2 border-dashed border-blue-400 rounded-xl p-8 text-center cursor-pointer">

          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={(e) =>
              setFile(
                e.target.files[0]
              )
            }
          />

          <p className="text-lg font-medium">
            Upload Resume PDF
          </p>

          <p className="text-sm text-gray-500">
            Click here to select file
          </p>

        </label>

        {file && (

          <div className="mt-4 bg-blue-50 p-3 rounded-lg">

            📄 <strong>{file.name}</strong>

          </div>

        )}

        <textarea
          rows="8"
          placeholder="Paste Job Description Here..."
          value={jobDescription}
          onChange={(e) =>
            setJobDescription(
              e.target.value
            )
          }
          className={`w-full border rounded-xl p-4 mt-6 ${
  darkMode
    ? "bg-slate-700 border-slate-600 text-white"
    : "bg-white"
}`}
        />

        <div className="flex gap-4 mt-4">

          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            {
              loading
                ? "Analyzing..."
                : "Analyze Resume"
            }
          </button>

          <Link
            to="/history"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            View History
          </Link>

        </div>

      </div>

      {/* ATS Result */}

      {result && (

        <div className="mt-8">

          <div className={cardClass}>

            <ATSScoreCard
              score={result.score || 0}
            />

          </div>
          <div className="flex justify-center mt-6">

  <ATSBadge
    score={result.score || 0}
  />

</div>

          <div className={cardClass + " mt-6"}>

  <h2 className="text-2xl font-bold mb-4">
    Skill Match Analysis
  </h2>

  <SkillPieChart
    matchedSkills={
      result?.matchedSkills || []
    }
    missingSkills={
      result?.missingSkills || []
    }
  />

</div>

          <div className="mt-6 flex justify-center">

            <button
              onClick={() =>
                downloadReport(result)
              }
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
            >
              Download ATS Report PDF
            </button>

          </div>

        </div>

      )}

      {/* Chart */}

      <div className={cardClass + " mt-10"}>

        <h2 className="text-2xl font-bold mb-6">
          ATS Score Trend
        </h2>

        <ScoreChart />

      </div>

      {/* Recent Analyses */}

      <div className={cardClass + " mt-10"}>

        <h2 className="text-2xl font-bold mb-6">
          Recent Analyses
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-3">
                Date
              </th>

              <th className="text-left p-3">
                ATS Score
              </th>

            </tr>

          </thead>

          <tbody>

            {recentAnalyses.map(
              (item) => (

                <tr
                  key={item._id}
                  className="border-b"
                >

                  <td className="p-3">

                    {
                      new Date(
                        item.createdAt
                      ).toLocaleDateString()
                    }

                  </td>

                  <td className="p-3 font-bold">

                    {item.atsScore}%

                  </td>

                </tr>

              )
            )}

          </tbody>

        </table>

      </div>

    </div>

  </div>
</>

);
}

export default Dashboard;
