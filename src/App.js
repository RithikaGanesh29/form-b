import React, { Component, useState } from "react";
import QrReader from "react-qr-scanner";

const Test = () => {
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState("");

  function handleScan(data) {
    setResult(data);
  }
  function handleError(err) {
    console.error(err);
  }
  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </div>
  );
};
export default Test;
