import React from 'react';
import { Calendar, Clock, MapPin, Ticket, Users, Star } from 'lucide-react';

const NextEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'TSSA vs Rival FC',
      type: 'Match',
      date: '2024-02-01',
      time: '19:30',
      location: 'Home Stadium',
      competition: 'League',
      isHome: true,
      importance: 'high',
      ticketPrice: '$25',
      availableTickets: 450,
    },
    {
      id: 2,
      title: 'Fan Meet & Greet',
      type: 'Event',
      date: '2024-02-05',
      time: '15:00',
      location: 'Community Center',
      competition: 'Community',
      isHome: true,
      importance: 'medium',
      ticketPrice: 'Free',
      availableTickets: 200,
    },
    {
      id: 3,
      title: 'TSSA vs NACOA',
      type: 'Match',
      date: '2026-02-10',
      time: '16:00',
      location: 'Away Stadium',
      competition: 'Cup',
      isHome: false,
      importance: 'high',
      ticketPrice: '$30',
      availableTickets: 0,
    },
    {
      id: 4,
      title: 'Youth Academy Open Day',
      type: 'Event',
      date: '2024-02-15',
      time: '10:00',
      location: 'Training Ground',
      competition: 'Academy',
      isHome: true,
      importance: 'low',
      ticketPrice: 'Free',
      availableTickets: 100,
    },
    {
      id: 5,
      title: 'TSSA vs City Warriors',
      type: 'Match',
      date: '2024-02-20',
      time: '20:00',
      location: 'Home Stadium',
      competition: 'League',
      isHome: true,
      importance: 'medium',
      ticketPrice: '$25',
      availableTickets: 320,
    },
    {
      id: 6,
      title: 'Charity Match',
      type: 'Match',
      date: '2024-02-25',
      time: '14:00',
      location: 'Home Stadium',
      competition: 'Charity',
      isHome: true,
      importance: 'medium',
      ticketPrice: '$15',
      availableTickets: 500,
    },
  ];

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-800 border-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 border-green-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Match': return Calendar;
      case 'Event': return Users;
      default: return Calendar;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const isSoldOut = (tickets: number) => tickets === 0;

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Next Events</h2>
          <p className="text-xl text-gray-600">Upcoming matches and events at the field</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {upcomingEvents.map((event) => {
                const IconComponent = getTypeIcon(event.type);
                return (
                  <div key={event.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getImportanceColor(event.importance)}`}>
                            {event.importance.toUpperCase()}
                          </span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {event.type}
                          </span>
                          {event.isHome && (
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                              HOME
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            {formatDate(event.date)}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Star className="w-4 h-4 mr-2" />
                            {event.competition}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-lg font-semibold text-gray-900">
                              {event.ticketPrice}
                            </div>
                            <div className={`text-sm ${isSoldOut(event.availableTickets) ? 'text-red-600 font-semibold' : 'text-green-600'}`}>
                              {isSoldOut(event.availableTickets) ? 'SOLD OUT' : `${event.availableTickets} tickets left`}
                            </div>
                          </div>
                          
                          <button
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                              isSoldOut(event.availableTickets)
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                            disabled={isSoldOut(event.availableTickets)}
                          >
                            {isSoldOut(event.availableTickets) ? 'Sold Out' : 'Get Tickets'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Ticket className="w-5 h-5 mr-2 text-blue-600" />
                Event Information
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Ticket Information</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Online booking available</li>
                    <li>• Stadium box office opens 2 hours before</li>
                    <li>• Group discounts available (10+ tickets)</li>
                    <li>• Children under 12: 50% off</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Venue Guidelines</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Gates open 1 hour before kickoff</li>
                    <li>• No outside food or drinks</li>
                    <li>• Security check at entrance</li>
                    <li>• Parking available on-site</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Live Streaming</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Can't make it to the stadium? Watch all home matches live on our platform.
                  </p>
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                    Subscribe to Live Stream
                  </button>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Season Pass</h4>
                  <p className="text-sm text-blue-800 mb-2">
                    Get access to all home matches and exclusive events.
                  </p>
                  <div className="text-2xl font-bold text-blue-900 mb-2">$299</div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Buy Season Pass
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextEvents;
