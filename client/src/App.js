import React, { useState } from 'react';

function App() {
  const [bookingData, setBookingData] = useState({
    client_name: '',
    start_time: '',
    end_time: '',
    artist_email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const bookAppointment = async () => {
    const response = await fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    });
    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Book a Tattoo Appointment</h1>
        <div className="space-y-4">
          <input
            type="text"
            name="client_name"
            placeholder="Client Name"
            value={bookingData.client_name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="datetime-local"
            name="start_time"
            value={bookingData.start_time}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="datetime-local"
            name="end_time"
            value={bookingData.end_time}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="artist_email"
            placeholder="Artist Email"
            value={bookingData.artist_email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={bookAppointment}
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
