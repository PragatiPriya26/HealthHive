import React, { useState } from "react";

const deviceOptions = ["Wearable", "Smart Scale", "Heart Rate Monitor"];

const SmartIntegration = () => {
  const [deviceType, setDeviceType] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [connectedDevices, setConnectedDevices] = useState([]);

  const handleConnect = () => {
    if (!deviceType || !deviceName) {
      alert("Please select a device type and enter a name.");
      return;
    }

    const newDevice = { type: deviceType, name: deviceName };
    setConnectedDevices([...connectedDevices, newDevice]);
    setDeviceType("");
    setDeviceName("");
  };

  const handleDisconnect = (index) => {
    const updatedDevices = connectedDevices.filter((_, i) => i !== index);
    setConnectedDevices(updatedDevices);
  };

  return (
    <section id="integration" className="py-16 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-10">Smart Device Integration</h2>

      {/* Device Connect Form */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Device Type</label>
          <select
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">-- Select a Device --</option>
            {deviceOptions.map((device, index) => (
              <option key={index} value={device}>
                {device}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Device Name / ID</label>
          <input
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            placeholder="Enter device name or ID"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          onClick={handleConnect}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Connect Device
        </button>
      </div>

      {/* Connected Devices */}
      {connectedDevices.length > 0 && (
        <div className="max-w-2xl mx-auto mt-8">
          <h3 className="text-xl font-semibold mb-4">Connected Devices</h3>
          <ul className="space-y-2">
            {connectedDevices.map((device, index) => (
              <li
                key={index}
                className="flex justify-between items-center border rounded px-4 py-2 bg-white shadow"
              >
                <span>{device.type}: {device.name}</span>
                <div className="flex items-center space-x-4">
                  <span className="text-green-600 font-semibold">Connected</span>
                  <button
                    onClick={() => handleDisconnect(index)}
                    className="text-red-600 font-semibold hover:underline"
                  >
                    Disconnect
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default SmartIntegration;
