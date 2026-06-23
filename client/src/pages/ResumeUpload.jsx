import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function ResumeUpload() {

const [file, setFile] = useState(null);
const [uploading, setUploading] = useState(false);
const [message, setMessage] = useState("");

const handleUpload = async () => {


if (!file) {
  alert("Please select a resume");
  return;
}

const formData = new FormData();

formData.append(
  "resume",
  file
);

try {

  setUploading(true);

  const res = await api.post(
    "/resume/upload",
    formData,
    {
      headers: {
        "Content-Type":
        "multipart/form-data"
      }
    }
  );

  setMessage(res.data.message);

} catch (err) {

  console.log(err);

  setMessage(
    "Resume Upload Failed"
  );

} finally {

  setUploading(false);

}


};

return (
<> <Navbar />


  <div className="min-h-screen bg-slate-100 p-8">

    <h1 className="text-4xl font-bold mb-6">
      Upload Resume
    </h1>

    <div className="bg-white p-8 rounded-2xl shadow max-w-2xl">

      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
        className="mb-4"
      />

      {file && (

        <div className="mb-4">

          <p className="font-semibold">
            Selected File:
          </p>

          <p className="text-blue-600">
            {file.name}
          </p>

        </div>

      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-400"
      >
        {uploading
          ? "Uploading..."
          : "Upload Resume"}
      </button>

      {message && (

        <div className="mt-4 p-3 bg-green-100 rounded-lg">

          <p>
            {message}
          </p>

        </div>

      )}

    </div>

  </div>
</>


);
}

export default ResumeUpload;
