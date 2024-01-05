import { useState } from 'react';
import DeleteIcon from "../Images/DashCircle.svg" 
const SampleTable = () => {
  // Sample data for patients
  const patients = [
    { id: 1, name: 'John Doe', lastAppointmentDate: '2022-03-15', age: 25 },
    { id: 2, name: 'Jane Smith', lastAppointmentDate: '2022-03-10', age: 30 },
    { id: 2, name: 'Jane Smith', lastAppointmentDate: '2022-03-10', age: 30 },
    // Add more patient data as needed
  ];

  // State to track the selected patient for viewing more details
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Function to handle "View More" button click
  const handleViewMore = (patient) => {
    // Set the selected patient and trigger a modal or navigate to another page
    setSelectedPatient(patient);
    // Example: Open a modal or navigate to another page
    // showModalOrNavigate();
  };
  const handleDelete = () => {
    // Set the selected patient and trigger a modal or navigate to another page
    setSelectedPatient(patient);
    // Example: Open a modal or navigate to another page
    // showModalOrNavigate();
  };

  return (
<div className="w-full  py-[5%] justify-center">
      <table className="w-full  border-gray-300">
        <thead>
          <tr>
            <th className="p-2 border-b ">Name</th>
            <th className="p-2  border-b">Last Appointment Date</th>
            <th className="p-2  border-b">Age</th>
            <th className="p-2 border-b ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="p-2 border-t border-b text-center">{patient.name}</td>
              <td className="p-2 border-t border-b text-center">{patient.lastAppointmentDate}</td>
              <td className="p-2 border-t border-b text-center">{patient.age}</td>
              <td className="p-2 border-t border-b text-center">
                <button
                  onClick={() => handleViewMore(patient)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  View More
                </button>
              </td>
              <td className="p-2 border-t border-b"><button onClick={handleDelete} className="mx-2 cursor-pointer flex flex-col">
        <div className='flex flex-row rounded-2xl   px-4 py-2 '>
        <img src={DeleteIcon} alt="Suivi" className="w-6 h-6" />
        
        </div>
      </button> </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display additional details in a modal or another page */}
      {selectedPatient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Patient Details</h2>
            <p>Name: {selectedPatient.name}</p>
            <p>Last Appointment Date: {selectedPatient.lastAppointmentDate}</p>
            <p>Age: {selectedPatient.age}</p>
            {/* Add more details as needed */}
            <button
              onClick={() => setSelectedPatient(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SampleTable;
