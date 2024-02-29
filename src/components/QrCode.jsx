import { useState } from "react";

export const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState("Sathya");
  const [qrSize, setQrSize] = useState("150");
  async function generateQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (error) {
      console.error("error" + error);
    } finally {
      setLoading(false);
    }
  }
  function downloadQr() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("error download qr code", error);
      });
  }
  return (
    <div className="app-container">
      <h2>QR Code Generator</h2>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} alt="" className="qrimg" />}
      <div>
        <label htmlFor="dataInput" className="input-Label">
          Data for QR Code:
        </label>
        <input
          type="text"
          id="dataInput"
          placeholder="Enter data for QR Code"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />
        <label htmlFor="sizeInput" className="input-Label">
          Image Size:
        </label>
        <input
          type="text"
          id="sizeInput"
          placeholder="Enter the image size"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
        />
        <button className="qbtn" disabled={loading} onClick={generateQr}>
          Generate QR Code
        </button>
        <button className="dbtn" onClick={downloadQr}>
          Download QR Code
        </button>
      </div>
      <p className="footer">
        Designed by{" "}
        <a href="https://msathyanarayananportfolio.web.app/">
          Sathyanarayanan M
        </a>
      </p>
    </div>
  );
};
