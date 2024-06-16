"use client";

import axios from 'axios';
import { useEffect, useState, ChangeEvent, FormEvent } from 'react';

interface Bike {
  id: string;
  attributes: {
    name: string;
  };
}

interface BookingForm {
  name: string;
  email: string;
  startDate: string;
  endDate: string;
  bikeId: string;
}

const BooqableApiUrl = "https://api.booqable.com/v2/bookings";
const ApiToken = process.env.BOOQABLE_API_TOKEN;

const BookingsPage: React.FC = () => {
  const [form, setForm] = useState<BookingForm>({
    name: '',
    email: '',
    startDate: '',
    endDate: '',
    bikeId: ''
  });

  const [message, setMessage] = useState<string>('');
  const [bikes, setBikes] = useState<Bike[]>([]);

  // Fetch available bikes from Booqable API
  const fetchBikes = async () => {
    try {
      const response = await axios.get("https://api.booqable.com/v2/products", {
        headers: {
          'Authorization': `Bearer ${ApiToken}`,
        },
      });
      setBikes(response.data.data); // Adjust according to actual response structure
    } catch (error) {
      console.error('Error fetching bikes:', error);
    }
  };

  useEffect(() => {
    fetchBikes();
  }, []);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(BooqableApiUrl, {
        data: {
          type: 'bookings',
          attributes: {
            customer_name: form.name,
            customer_email: form.email,
            start_date: form.startDate,
            end_date: form.endDate,
            product_id: form.bikeId,
          }
        }
      }, {
        headers: {
          'Authorization': `Bearer ${ApiToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        setMessage('Your booking has been confirmed!');
        setForm({ name: '', email: '', startDate: '', endDate: '', bikeId: '' });
      } else {
        setMessage('There was an error with your booking. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white text-gray-800 py-16 px-8 md:px-16 lg:px-32">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Book Your E-Bike</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Reserve your e-bike in advance to ensure availability. Fill out the form below to book your rental.
        </p>

        <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="endDate" className="block text-gray-700 font-medium mb-2">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bikeId" className="block text-gray-700 font-medium mb-2">Select E-Bike</label>
            <select
              id="bikeId"
              name="bikeId"
              value={form.bikeId}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="" disabled>Select a bike</option>
              {bikes.map((bike) => (
                <option key={bike.id} value={bike.id}>
                  {bike.attributes.name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">Book Now</button>
        </form>

        {message && <p className="mt-4 text-lg text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default BookingsPage;
