import React, { useState } from 'react';
import { Newspaper, Calendar, Clock, Share2, Heart, MessageCircle, TrendingUp, Play } from 'lucide-react';

const NewsReels = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const newsArticles = [
    {
      id: 1,
      title: 'TSSA Signs Star Striker for Record Transfer',
      category: 'Transfers',
      date: '2024-01-20',
      time: '14:30',
      author: 'John Smith',
      image: 'https://images.unsplash.com/photo-1508098682728-e35c6f68dc0e?w=800&h=400&fit=crop',
      excerpt: 'In a groundbreaking move, TSSA has completed the signing of international striker Marcus Rodriguez for a club-record fee.',
      content: 'The 26-year-old forward joins from European champions, bringing with him a wealth of experience and a proven goal-scoring record...',
      readTime: '3 min read',
      likes: 456,
      comments: 89,
      shares: 234,
      trending: true,
      video: false,
    },
    {
      id: 2,
      title: 'Match Highlights: TSSA 3-1 Rival FC',
      category: 'Match',
      date: '2024-01-18',
      time: '20:15',
      author: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=400&fit=crop',
      excerpt: 'Watch all the key moments from yesterday\'s thrilling victory over our biggest rivals.',
      content: 'TSSA delivered a commanding performance with goals from three different players...',
      readTime: '2 min read',
      likes: 789,
      comments: 156,
      shares: 445,
      trending: true,
      video: true,
    },
    {
      id: 3,
      title: 'Academy Graduates Make First Team Debut',
      category: 'Academy',
      date: '2024-01-15',
      time: '11:00',
      author: 'Mike Wilson',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      excerpt: 'Two young talents from our youth academy make their first professional appearances.',
      content: 'The future looks bright as TSSA continues to develop homegrown talent...',
      readTime: '4 min read',
      likes: 234,
      comments: 67,
      shares: 123,
      trending: false,
      video: false,
    },
    {
      id: 4,
      title: 'Stadium Expansion Plans Announced',
      category: 'Club',
      date: '2024-01-12',
      time: '16:45',
      author: 'Emma Davis',
      image: 'https://images.unsplash.com/photo-1554068394-1e6e5c0b2c5f?w=800&h=400&fit=crop',
      excerpt: 'TSSA announces ambitious plans to expand the home stadium to 50,000 capacity.',
      content: 'The club has unveiled plans for a major stadium redevelopment project...',
      readTime: '5 min read',
      likes: 567,
      comments: 234,
      shares: 678,
      trending: true,
      video: false,
    },
    {
      id: 5,
      title: 'Community Outreach Program Launch',
      category: 'Community',
      date: '2024-01-10',
      time: '09:30',
      author: 'David Brown',
      image: 'https://images.unsplash.com/photo-1461896836860-08bdef4c93eb?w=800&h=400&fit=crop',
      excerpt: 'TSSA launches new initiative to support local youth sports programs.',
      content: 'The club is committed to giving back to the community that supports us...',
      readTime: '3 min read',
      likes: 189,
      comments: 45,
      shares: 89,
      trending: false,
      video: false,
    },
    {
      id: 6,
      title: 'Behind the Scenes: Training Session',
      category: 'Training',
      date: '2024-01-08',
      time: '13:20',
      author: 'Lisa Anderson',
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=400&fit=crop',
      excerpt: 'Exclusive footage from today\'s intensive training session.',
      content: 'Get an inside look at how the team prepares for upcoming matches...',
      readTime: '2 min read',
      likes: 345,
      comments: 78,
      shares: 234,
      trending: false,
      video: true,
    },
  ];

  const categories = ['All', 'Match', 'Transfers', 'Academy', 'Club', 'Community', 'Training'];

  const filteredNews = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const trendingNews = newsArticles.filter(article => article.trending);

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Newspaper className="w-8 h-8 mr-3 text-blue-600" />
            News & Updates
          </h2>
          <p className="text-xl text-gray-600">Latest stories and breaking news from TSSA</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {filteredNews.map((article) => (
                <article key={article.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover"
                    />
                    {article.video && (
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors cursor-pointer">
                          <Play className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                    )}
                    {article.trending && (
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        TRENDING
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-3">{formatDate(article.date)}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="mr-3">{article.time}</span>
                      <span className="mr-3">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                          {article.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{article.author}</p>
                          <p className="text-sm text-gray-500">Sports Journalist</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors">
                          <Heart className="w-5 h-5" />
                          <span className="text-sm">{article.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm">{article.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition-colors">
                          <Share2 className="w-5 h-5" />
                          <span className="text-sm">{article.shares}</span>
                        </button>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-red-600" />
                  Trending Now
                </h3>
                <div className="space-y-4">
                  {trendingNews.map((article, index) => (
                    <div key={article.id} className="flex items-start space-x-3 cursor-pointer hover:bg-white p-2 rounded transition-colors">
                      <div className="text-2xl font-bold text-gray-400 w-8 text-center">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm mb-1 hover:text-blue-600 transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 space-x-2">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.likes} likes</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Get the latest TSSA news delivered directly to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Subscribe
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Facebook
                  </button>
                  <button className="bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium">
                    Twitter
                  </button>
                  <button className="bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium">
                    Instagram
                  </button>
                  <button className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                    YouTube
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

export default NewsReels;
