import { useState } from "react";
import { FaDownload } from "react-icons/fa";

function App() {
  const [url, setUrl] = useState("");

  const handleDownload = () => {
    if (url) {
      alert(`Downloading video from: ${url}`);
      // Here you would typically call a backend service to handle the download
    } else {
      alert("Please enter a valid YouTube URL");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">YouTube Downloader</h1>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">YouTube URL</span>
          </label>
          <input type="text" placeholder="Enter YouTube URL" className="input input-bordered w-full" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <button className="btn btn-primary w-full flex items-center justify-center" onClick={handleDownload}>
          <FaDownload className="mr-2" />
          Download
        </button>
      </div>
    </div>
  );
}

export default App;
