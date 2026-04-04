import React, { useState } from 'react';
import { Camera, Heart, Share2, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&h=600&fit=crop',
      title: 'Team Celebration',
      category: 'Match',
      date: '2024-01-15',
      likes: 245,
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      title: 'Training Session',
      category: 'Training',
      date: '2024-01-12',
      likes: 189,
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1554068394-1e6e5c0b2c5f?w=800&h=600&fit=crop',
      title: 'Stadium View',
      category: 'Stadium',
      date: '2024-01-10',
      likes: 312,
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=800&h=600&fit=crop',
      title: 'Match Action',
      category: 'Match',
      date: '2024-01-08',
      likes: 423,
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1414235075428-338989a2e8c0?w=800&h=600&fit=crop',
      title: 'Trophy Presentation',
      category: 'Event',
      date: '2024-01-05',
      likes: 567,
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1461896836860-08bdef4c93eb?w=800&h=600&fit=crop',
      title: 'Team Photo',
      category: 'Team',
      date: '2024-01-01',
      likes: 892,
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      title: 'Fan Support',
      category: 'Fans',
      date: '2023-12-28',
      likes: 234,
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1554068394-1e6e5c0b2c5f?w=800&h=600&fit=crop',
      title: 'Night Match',
      category: 'Match',
      date: '2023-12-25',
      likes: 445,
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=600&fit=crop',
      title: 'Academy Training',
      category: 'Training',
      date: '2023-12-20',
      likes: 178,
    },
  ];

  const categories = ['All', 'Match', 'Training', 'Stadium', 'Event', 'Team', 'Fans'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null;

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Camera className="w-8 h-8 mr-3 text-blue-600" />
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600">Capturing memorable moments on and off the field</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-w-16 aspect-h-12 relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                  {image.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{image.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{image.date}</span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1 text-red-500" />
                      {image.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImageData && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedImageData.url}
                  alt={selectedImageData.title}
                  className="max-w-full max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedImageData.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedImageData.category}
                      </span>
                      <span className="text-gray-500">{selectedImageData.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span>{selectedImageData.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
