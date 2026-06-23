import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Result() {

const location = useLocation();
const result = location.state?.atsResult;

console.log("RESULT:", result);

if (!result) {


return (
  <>
    <Navbar />

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="bg-white p-8 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-red-600">
          No Analysis Result Found
        </h1>

        <Link
          to="/analyze"
          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Go Back
        </Link>

      </div>

    </div>
  </>
);


}

return (
<> <Navbar />


  <div className="min-h-screen bg-slate-100 p-8">

    <h1 className="text-4xl font-bold mb-8">
      ATS Analysis Result
    </h1>

    <div className="bg-white p-6 rounded-2xl shadow mb-6">

      <h2 className="text-lg text-gray-500">
        ATS Score
      </h2>

      <p className="text-6xl font-bold text-blue-600">
        {result.score || 0}%
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          Matched Skills
        </h2>

        <ul>
          {(result.matchedSkills || []).map(
            (skill, index) => (
              <li key={index} className="mb-2">
                ✅ {skill}
              </li>
            )
          )}
        </ul>

      </div>

      <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="text-2xl font-bold mb-4">
          Missing Skills
        </h2>

        <ul>
          {(result.missingSkills || []).map(
            (skill, index) => (
              <li key={index} className="mb-2">
                ❌ {skill}
              </li>
            )
          )}
        </ul>

      </div>

    </div>

    <div className="mt-6 bg-white p-6 rounded-2xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        AI Suggestions
      </h2>

      <ul>

        {(result.suggestions || []).map(
          (item, index) => (

            <li
              key={index}
              className="mb-2"
            >
              💡 {
                typeof item === "string"
                  ? item
                  : item?.suggestion
              }
            </li>

          )
        )}

      </ul>

    </div>

    <Link
      to="/analyze"
      className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
    >
      Analyze Another Resume
    </Link>

  </div>
</>


);

}

export default Result;
