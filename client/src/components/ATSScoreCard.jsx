import {
CircularProgressbar,
buildStyles
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function ATSScoreCard({ score = 0 }) {

const getColor = () => {

if (score >= 80)
  return "#16a34a";

if (score >= 60)
  return "#2563eb";

return "#dc2626";


};

const getMessage = () => {


if (score >= 80)
  return "Excellent Resume";

if (score >= 60)
  return "Good Resume";

return "Needs Improvement";


};

return (


<div className="flex flex-col items-center">

  <h2 className="text-2xl font-bold mb-6">
    ATS Score
  </h2>

  <div className="w-48 h-48">

    <CircularProgressbar
      value={score}
      text={`${score}%`}
      styles={buildStyles({
        textSize: "16px",
        pathColor: getColor(),
        textColor: "#111827",
        trailColor: "#e5e7eb",
        strokeLinecap: "round"
      })}
    />

  </div>

  <p
    className="mt-6 text-lg font-semibold"
    style={{
      color: getColor()
    }}
  >
    {getMessage()}
  </p>

</div>


);

}

export default ATSScoreCard;
