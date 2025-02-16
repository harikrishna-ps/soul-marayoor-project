import { FormEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    checkIn: '',
    checkOut: '',
    guests: 2
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-earth-light/10">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display'] text-4xl text-center mb-12">Book Your Stay</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-600">
              <p><strong>Address:</strong> Channel medu, Building number 383, Anakkalpetty, Marayoor, Munnar, Kerala 685620</p>
              <p><strong>Phone:</strong> <a href="tel:+919497778081" className="hover:text-earth">+91 9497778081</a></p>
              <p><strong>Email:</strong> <a href="mailto:thesoulmarayoormudhouse@gmail.com" className="hover:text-earth">thesoulmarayoormudhouse@gmail.com</a></p>
              <p><strong>Instagram:</strong> <a href="https://www.instagram.com/thesoul_marayoor?igsh=cmhyZzdza3BybzM4" target="_blank" rel="noopener noreferrer" className="hover:text-earth">@thesoul_marayoor</a></p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Check-in/Check-out Times</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div>
                <p className="font-medium">Check-in Time</p>
                <p>1 PM - 9 PM</p>
              </div>
              <div>
                <p className="font-medium">Check-out Time</p>
                <p>11 AM</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="checkIn" className="block text-gray-700 mb-2">Check-in Date</label>
                <input
                  type="date"
                  id="checkIn"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-earth"
                  required
                />
              </div>
              <div>
                <label htmlFor="checkOut" className="block text-gray-700 mb-2">Check-out Date</label>
                <input
                  type="date"
                  id="checkOut"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-earth"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="guests" className="block text-gray-700 mb-2">Number of Guests</label>
              <select
                id="guests"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-earth"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-earth"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-earth"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Special Requests</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-earth focus:border-earth"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-earth hover:bg-earth-dark text-white px-6 py-3 rounded-lg transition-colors"
            >
              Book Now
            </button>
          </form>

          <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Property Rules</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-earth mr-2">✓</span>
                Couple friendly - Unmarried couples allowed
              </li>
              <li className="flex items-center">
                <span className="text-earth mr-2">✓</span>
                Passport, Aadhar, Driving License and Govt. ID accepted as ID proof
              </li>
              <li className="flex items-center">
                <span className="text-earth mr-2">✓</span>
                Local IDs accepted
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;