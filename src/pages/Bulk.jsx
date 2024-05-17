import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bulk = () => {
  const [message, setMessage] = useState("");
  const [recipients, setRecipients] = useState("");
  const [sendOption, setSendOption] = useState("sms");

  const handleSendMessage = () => {
    if (message.trim() === "" || recipients.trim() === "") {
      toast.error("Please enter both message and recipients.");
      return;
    }

    // For the sake of this example, we'll just show a success notification.
    const successMessage = sendOption === "sms" ? "SMS" : "Email";
    toast.success(`${successMessage} sent successfully!`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md my-20">
      <h1 className="text-2xl font-bold mb-6">Bulk Message Page</h1>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Message:</label>
        <textarea
          className="w-full px-3 py-2 border rounded-md text-sm outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Recipients (comma-separated):
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md text-sm outline-none"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Send as:</label>
        <div className="flex items-center">
          <label className="mr-2">
            <input
              type="radio"
              value="sms"
              checked={sendOption === "sms"}
              onChange={() => setSendOption("sms")}
            />
            SMS
          </label>
          <label>
            <input
              type="radio"
              value="email"
              checked={sendOption === "email"}
              onChange={() => setSendOption("email")}
            />
            Email
          </label>
        </div>
      </div>
      <button
        className="bg-button-bg text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 cursor-pointer"
        onClick={handleSendMessage}
      >
        Send Message
      </button>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Bulk;
