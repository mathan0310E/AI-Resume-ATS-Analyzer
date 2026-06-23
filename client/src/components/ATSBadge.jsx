function ATSBadge({ score = 0 }) {

  let badge = "";
  let color = "";

  if (score >= 90) {
    badge = "🏆 ATS Master";
    color = "bg-yellow-500";
  }
  else if (score >= 80) {
    badge = "🥇 Resume Pro";
    color = "bg-green-500";
  }
  else if (score >= 70) {
    badge = "🥈 Strong Candidate";
    color = "bg-blue-500";
  }
  else if (score >= 60) {
    badge = "🥉 Good Start";
    color = "bg-orange-500";
  }
  else {
    badge = "⚠️ Needs Improvement";
    color = "bg-red-500";
  }

  return (

    <div
      className={`${color} text-white px-6 py-3 rounded-xl inline-block font-bold text-lg`}
    >
      {badge}
    </div>

  );

}

export default ATSBadge;