import { useState } from "react";

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "John Doe", role: "Property Manager" },
    { id: 2, name: "Jane Smith", role: "Accountant" },
    { id: 2, name: "Thanda Cloud", role: "Cate taker" },
    { id: 2, name: "Cod Fort", role: "Manager" },
    // * Add more team members as needed
  ]);

  const [newTeamMember, setNewTeamMember] = useState({ name: "", role: "" });

  const handleAddTeamMember = () => {
    // Assuming you have some logic for generating a unique ID
    const newMember = { ...newTeamMember, id: teamMembers.length + 1 };
    // Add the new team member to the list
    setTeamMembers([...teamMembers, newMember]);
    // Clear the form
    setNewTeamMember({ name: "", role: "" });
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-md shadow-md">
      <header className="text-3xl font-bold mb-4">
        Property Management Team
      </header>

      <section>
        <h2 className="text-2xl mb-2">Current Team Members</h2>
        <ul className="list-disc pl-5">
          {teamMembers.map((member) => (
            <li key={member.id} className="mb-2">
              <span>{member.name} -</span> 
              <span>{member.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="text-2xl mb-2">Add New Team Member</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddTeamMember();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              value={newTeamMember.name}
              onChange={(e) =>
                setNewTeamMember({ ...newTeamMember, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Role:
            </label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full"
              value={newTeamMember.role}
              onChange={(e) =>
                setNewTeamMember({ ...newTeamMember, role: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="bg-button-bg text-white py-2 px-4 rounded-md hover:opacity-90"
          >
            Add Team Member
          </button>
        </form>
      </section>
    </div>
  );
};

export default TeamPage;
