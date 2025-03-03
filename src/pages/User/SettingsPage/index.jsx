import React, { useState } from "react";
import { Select, Switch, Button, message } from "antd";
const SettingsPage = () => {
  const [language, setLanguage] = useState("english");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const languages = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
  ];

  const handleSave = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Settings saved:", { language, isDarkTheme });
      message.success("Settings updated successfully!");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-medium py-10">Settings</h1>

        <div className="space-y-8">
          <div>
            <label className="block text-gray-700 mb-2">Language</label>
            <Select
              value={language}
              onChange={setLanguage}
              options={languages}
              className="w-full bg-gray-50"
              size="large"
              style={{
                height: 48,
                backgroundColor: "#f9fafb",
              }}
            />
            <p className="text-gray-400 mt-1">
              Please select your preferred language.
            </p>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Theme</label>
            <Switch
              checked={isDarkTheme}
              onChange={setIsDarkTheme}
              className={`${isDarkTheme ? "bg-blue-500" : "bg-gray-200"}`}
            />
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          <div className="flex justify-end">
            <Button
              type="primary"
              onClick={handleSave}
              loading={isSubmitting}
              className="!bg-[#152540] hover:!bg-[#2a3b5bc1] h-12 px-6 rounded"
              size="large">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
