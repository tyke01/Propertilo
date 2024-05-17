import { useState, useEffect } from "react";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    companyName: "Property Management Inc.",
    address: "123 Main St, Cityville",
    contactEmail: "info@propertymanagement.com",
    contactPhone: "123-456-7890",
    theme: "light", // Added theme setting
  });

  const handleSaveSettings = () => {
    // Assuming you have some logic for saving settings
    console.log("Settings saved:", settings);
  };

  const handleToggleTheme = () => {
    setSettings({
      ...settings,
      theme: settings.theme === "light" ? "dark" : "light",
    });
  };

  return (
    <div
      className={`max-w-2xl mx-auto mt-10 p-6 bg-${
        settings.theme === "light" ? "white" : "gray-800"
      } rounded-md shadow-md text-${
        settings.theme === "light" ? "black" : "white"
      }`}
    >
      <header className="text-3xl font-bold mb-4">Dashboard Settings</header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveSettings();
        }}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Company Name:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            value={settings.companyName}
            onChange={(e) =>
              setSettings({ ...settings, companyName: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address:
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            value={settings.address}
            onChange={(e) =>
              setSettings({ ...settings, address: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Contact Email:
          </label>
          <input
            type="email"
            className="mt-1 p-2 border rounded-md w-full"
            value={settings.contactEmail}
            onChange={(e) =>
              setSettings({ ...settings, contactEmail: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Contact Phone:
          </label>
          <input
            type="tel"
            className="mt-1 p-2 border rounded-md w-full"
            value={settings.contactPhone}
            onChange={(e) =>
              setSettings({ ...settings, contactPhone: e.target.value })
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Theme:
          </label>
          <div className="flex items-center">
            <span className="mr-2">Light</span>
            <label className="switch">
              <input type="checkbox" onChange={handleToggleTheme} />
              <span className="slider"></span>
            </label>
            <span className="ml-2">Dark</span>
          </div>
        </div>

        <button
          type="submit"
          className="bg-button-bg text-white py-2 px-4 rounded-md hover:opacity-90"
        >
          Save Settings
        </button>

        <div className="mt-4 flex justify-between">
          <button
            type="button"
            onClick={() =>
              alert("Help Section - Provide assistance or guidance")
            }
            className="bg-button-bg text-white py-2 px-4 rounded-md hover:opacity-90 mr-4"
          >
            Get Help
          </button>

          <a
            href="" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-link-text hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
