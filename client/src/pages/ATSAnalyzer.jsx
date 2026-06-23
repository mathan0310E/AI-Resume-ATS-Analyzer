import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function ATSAnalyzer() {

const navigate = useNavigate();

const [jobDescription, setJobDescription] =
useState("");

const [loading, setLoading] =
useState(false);

const analyze = async () => {
if (!jobDescription.trim()) {

  alert(
    "Please enter a Job Description"
  );

  return;

}

try {

  setLoading(true);

  const res = await api.post(
    "/ats/analyze",
    {
      jobDescription
    }
  );

  console.log(
    "ANALYSIS RESPONSE:",
    res.data
  );

  navigate(
    "/result",
    {
      state: res.data
    }
  );

} catch (err) {

  console.log(
    "ERROR:",
    err
  );

  if (err.response) {

    console.log(
      "SERVER:",
      err.response.data
    );

    alert(
      err.response.data.error ||
      "Analysis Failed"
    );

  } else {

    alert(
      err.message
    );

  }

} finally {

  setLoading(false);

}


};

return (
<> <Navbar />


  <div className="min-h-screen bg-slate-100 p-8">

    <h1 className="text-4xl font-bold mb-6">
      AI Resume ATS Analyzer
    </h1>

    <div className="bg-white p-6 rounded-2xl shadow">

      <textarea
        className="w-full p-4 border rounded-lg"
        rows="12"
        placeholder="Paste Job Description Here..."
        value={jobDescription}
        onChange={(e) =>
          setJobDescription(
            e.target.value
          )
        }
      />

      <button
        onClick={analyze}
        disabled={loading}
        className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:bg-gray-400"
      >
        {
          loading
            ? "Analyzing..."
            : "Analyze Resume"
        }
      </button>

    </div>

  </div>
</>

);
}

export default ATSAnalyzer;
