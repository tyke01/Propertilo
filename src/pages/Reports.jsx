// ReportsPage.jsx

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ReportItem = ({ report }) => {
  const handleDownload = () => {
    // Assume the report content is available in a variable or API call
    const reportContent = `Date: ${report.date}\nTitle: ${report.title}\nCategory: ${report.category}\nStatus: ${report.status}`;

    // Create a Blob from the report content
    const blob = new Blob([reportContent], { type: "text/plain" });

    // Create a link element and trigger a download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${report.title}_${report.date}.txt`;
    link.click();
  };

  return (
    <div className="flex justify-between border-b py-2">
      <span>{report.date}</span>
      <span>{report.title}</span>
      <span>{report.category}</span>
      <span>{report.status}</span>
      <button
        onClick={handleDownload}
        className="text-white bg-button-bg hover:opacity-90 rounded-md px-2 py-1"
      >
        Download
      </button>
    </div>
  );
};

ReportItem.propTypes = {
  report: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const ReportsList = ({ reports }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Reports</h2>
    <div className="flex justify-between items-center border-b font-bold py-2">
      <span>Date</span>
      <span>Title</span>
      <span>Category</span>
      <span>Status</span>
      <span>Action</span>
    </div>
    {reports.map((report) => (
      <ReportItem key={report.id} report={report} />
    ))}
  </div>
);

ReportsList.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // For demonstration purposes, hardcoding report data
    const demoReports = [
      {
        id: 1,
        date: "2023-09-10",
        title: "Financial Report",
        category: "Finance",
        status: "Published",
      },
      {
        id: 2,
        date: "2023-09-15",
        title: "Maintenance Report",
        category: "Maintenance",
        status: "Draft",
      },
      {
        id: 3,
        date: "2023-09-20",
        title: "Occupancy Report",
        category: "Operations",
        status: "Published",
      },
      // Add more reports as needed
    ];
    setReports(demoReports);
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <ReportsList reports={reports} />
    </div>
  );
};

export default Reports;
