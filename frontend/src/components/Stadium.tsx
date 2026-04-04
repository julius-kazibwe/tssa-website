import React, { useState } from 'react';
import { MapPin, Users, Calendar, Star, Navigation, Phone, Mail, Clock, Car, Coffee, Wifi, Shield, Camera } from 'lucide-react';

const Stadium = () => {
  const [selectedView, setSelectedView] = useState('overview');

  const stadiumInfo = {
    name: 'TSSA National Stadium',
    capacity: '45,000',
    built: 'Perception 2027',
    renovated: 'progessively',
    address: 'Under Verification',
    phone: '+1 (555)123-4567',
    email: 'rogers@tssa.com',
  };

  const facilities = [
    {
      name: 'Premium Seating',
      description: 'Luxury boxes with VIP service and best views',
      icon: Star,
      available: true,
    },
    {
      name: 'Family Zone',
      description: 'Dedicated family area with activities for children',
      icon: Users,
      available: true,
    },
    {
      name: 'Food Court',
      description: 'Variety of dining options and refreshments',
      icon: Coffee,
      available: true,
    },
    {
      name: 'Free Wi-Fi',
      description: 'High-speed internet throughout the stadium',
      icon: Wifi,
      available: true,
    },
    {
      name: 'Security',
      description: '24/7 professional security staff',
      icon: Shield,
      available: true,
    },
    {
      name: 'Parking',
      description: '2000+ parking spaces available',
      icon: Car,
      available: true,
    },
  ];

  const seatingCategories = [
    {
      category: 'VIP Boxes',
      price: '$250-500',
      capacity: '500',
      features: ['Premium seating', 'Private bar', 'Catering service', 'Best views'],
      color: 'bg-purple-100 text-purple-800 border-purple-300',
    },
    {
      category: 'Premium Stand',
      price: '$75-120',
      capacity: '5,000',
      features: ['Comfortable seating', 'Access to lounge', 'Food service', 'Great views'],
      color: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
      category: 'Family Stand',
      price: '$35-60',
      capacity: '10,000',
      features: ['Family-friendly', 'Activities area', 'Food court access', 'Good views'],
      color: 'bg-green-100 text-green-800 border-green-300',
    },
    {
      category: 'General Admission',
      price: '$20-35',
      capacity: '25,000',
      features: ['Traditional seating', 'Food stalls', 'Standing areas', 'Standard views'],
      color: 'bg-gray-100 text-gray-800 border-gray-300',
    },
    {
      category: 'Away Section',
      price: '$25-40',
      capacity: '4,500',
      features: ['Dedicated away fans', 'Separate entrance', 'Food service', 'Safe environment'],
      color: 'bg-red-100 text-red-800 border-red-300',
    },
  ];

  const upcomingEvents = [
    {
      date: '2024-02-01',
      event: 'TSSA vs Rival FC',
      expectedAttendance: '42,000',
      status: 'selling fast',
    },
    {
      date: '2024-02-10',
      event: 'TSSA vs United SC',
      expectedAttendance: '38,000',
      status: 'available',
    },
    {
      date: 'TO BE COMMUNICATED',
      event: 'TSSA vs KCCA',
      expectedAttendance: '45,000',
      status: 'pending',
    },
  ];

  const tours = [
    {
      name: 'Standard Stadium Tour',
      duration: '60 minutes',
      price: '$15',
      highlights: ['Field access', 'Locker rooms', 'Press box', 'Museum'],
    },
    {
      name: 'VIP Experience Tour',
      duration: '90 minutes',
      price: '$45',
      highlights: ['Behind the scenes', 'VIP areas', 'Meet & greet', 'Gift package'],
    },
    {
      name: 'Match Day Experience',
      duration: '3 hours',
      price: '$100',
      highlights: ['Pre-match access', 'Tunnel walk', 'Hospitality', 'Premium seating'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sold out': return 'bg-red-100 text-red-800';
      case 'selling fast': return 'bg-yellow-100 text-yellow-800';
      case 'available': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="stadium" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <MapPin className="w-8 h-8 mr-3 text-blue-600" />
            The Stadium
          </h2>
          <p className="text-xl text-gray-600">Home of TSSA - A world-class sporting venue</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1554068394-1e6e5c0b2c5f?w=800&h=400&fit=crop"
                alt="TSSA Stadium"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stadium Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Capacity</div>
                      <div className="text-gray-600">{stadiumInfo.capacity} spectators</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Built</div>
                      <div className="text-gray-600">{stadiumInfo.built} (Renovated {stadiumInfo.renovated})</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Address</div>
                      <div className="text-gray-600">{stadiumInfo.address}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Contact</div>
                      <div className="text-gray-600">{stadiumInfo.phone}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">{stadiumInfo.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Gates Open</div>
                      <div className="text-gray-600">2 hours before kickoff</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Here</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                  <Navigation className="w-5 h-5 mr-2" />
                  Get Directions
                </button>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Public Transport</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Metro: Stadium Station (Line 2)</li>
                    <li>• Bus: Routes 15, 23, 45</li>
                    <li>• Shuttle: From City Center</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 2000+ spaces available</li>
                    <li>• $15 per vehicle</li>
                    <li>• VIP parking available</li>
                    <li>• Disabled access provided</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stadium Tours</h3>
              <div className="space-y-4">
                {tours.map((tour, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{tour.name}</h4>
                      <span className="text-blue-600 font-bold">{tour.price}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="w-4 h-4 mr-1" />
                      {tour.duration}
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tour.highlights.map((highlight, i) => (
                        <li key={i}>• {highlight}</li>
                      ))}
                    </ul>
                    <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                      Book Tour
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Facilities & Amenities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900">{facility.name}</h4>
                  </div>
                  <p className="text-gray-600">{facility.description}</p>
                  <div className="mt-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      facility.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {facility.available ? 'Available' : 'Unavailable'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Seating Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seatingCategories.map((category, index) => (
              <div key={index} className={`border rounded-lg p-6 ${category.color}`}>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold">{category.category}</h4>
                  <span className="font-bold">{category.price}</span>
                </div>
                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Capacity: {category.capacity}</div>
                  <ul className="text-sm space-y-1">
                    {category.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-white bg-opacity-80 py-2 rounded hover:bg-opacity-100 transition-colors font-medium">
                  View Seats
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Stadium Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{event.event}</h4>
                    <div className="text-sm text-gray-500">{event.date}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  Expected: {event.expectedAttendance}
                </div>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-medium">
                  Get Tickets
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stadium;
