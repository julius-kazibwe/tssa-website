# TSSA Football Club Website

A comprehensive, modern website for TSSA Football Club built with React, Node.js, and TailwindCSS. Features include match information, trophy displays, photo galleries, event management, online store, news updates, YouTube integration, and Google Drive connectivity.

## 🏆 Features

### Frontend (React + TypeScript + TailwindCSS)
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Dynamic galleries, shopping cart, and forms
- **Navigation**: Sticky navbar with smooth scrolling
- **Image Rendering**: High-quality image galleries with lightbox
- **YouTube Integration**: Embedded channel with video management
- **Shopping Cart**: Full e-commerce functionality for merchandise
- **News System**: Trending articles, comments, and likes
- **Event Management**: Ticket booking and event information
- **Schedule View**: Monthly calendar with filtering options

### Backend (Node.js + Express)
- **RESTful API**: Comprehensive endpoints for all features
- **File Upload**: Secure file handling with Multer
- **Google Drive Integration**: Cloud storage with OAuth2
- **Security**: Helmet, CORS, compression, and rate limiting
- **Mock Data**: Ready-to-use sample data for development
- **Error Handling**: Comprehensive error management
- **Logging**: Request logging with Morgan

## 📁 Project Structure

```
tsya-website/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── TheClub.tsx
│   │   │   ├── MatchesPlayed.tsx
│   │   │   ├── TrophiesWon.tsx
│   │   │   ├── PhotoGallery.tsx
│   │   │   ├── NextEvents.tsx
│   │   │   ├── OfficialStore.tsx
│   │   │   ├── NewsReels.tsx
│   │   │   ├── YouTubeChannel.tsx
│   │   │   ├── YearlySchedule.tsx
│   │   │   └── Stadium.tsx
│   │   ├── App.tsx
│   │   └── index.css
│   ├── public/
│   └── package.json
├── backend/                  # Node.js backend
│   ├── routes/              # API routes
│   │   ├── matches.js
│   │   ├── events.js
│   │   ├── news.js
│   │   ├── store.js
│   │   ├── gallery.js
│   │   ├── schedule.js
│   │   ├── stadium.js
│   │   ├── club.js
│   │   ├── trophies.js
│   │   ├── upload.js
│   │   └── googleDrive.js
│   ├── uploads/             # File upload directory
│   ├── server.js
│   ├── package.json
│   └── README.md
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm start
```

4. Open browser at `http://localhost:3000`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables (see backend README for details)

5. Start development server:
```bash
npm run dev
```

Backend will be available at `http://localhost:5000`

## 🌐 Website Sections

### 1. **Navbar**
- Sticky navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Links to all major sections

### 2. **Hero Section**
- Eye-catching landing with call-to-action buttons
- Club statistics display
- Featured achievement highlight

### 3. **The Club**
- Club history and values
- Leadership team profiles
- Community programs
- Partners and sponsors

### 4. **Matches Played**
- Season statistics and match history
- Recent match results
- Performance metrics
- Interactive data tables

### 5. **Trophies Won**
- Trophy showcase with images
- Achievement timeline
- Statistics and records
- Category filtering

### 6. **Photo Gallery**
- Image gallery with categories
- Lightbox viewing
- Like and share functionality
- Search and filter options

### 7. **Next Events**
- Upcoming matches and events
- Ticket booking system
- Event importance indicators
- Calendar integration

### 8. **Official Store**
- E-commerce functionality
- Product categories and filtering
- Shopping cart management
- Stock checking system

### 9. **News Reels**
- News articles with images
- Trending stories
- Like and comment system
- Category filtering

### 10. **YouTube Channel**
- Embedded video gallery
- Channel statistics
- Video categorization
- Search functionality

### 11. **Yearly Schedule**
- Monthly calendar view
- Event filtering by competition
- Statistics dashboard
- Navigation controls

### 12. **Stadium**
- Stadium information and facilities
- Tour booking system
- Seating categories
- Accessibility information

## 🛠️ Technologies Used

### Frontend
- **React 18**: Modern UI framework
- **TypeScript**: Type-safe development
- **TailwindCSS**: Utility-first CSS framework
- **React Router**: Navigation
- **Lucide React**: Icon library
- **Axios**: HTTP client

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **Multer**: File upload handling
- **Google APIs**: Drive integration
- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Morgan**: HTTP request logger
- **Compression**: Response compression

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Google Drive API (optional)
GOOGLE_DRIVE_CLIENT_ID=your-client-id
GOOGLE_DRIVE_CLIENT_SECRET=your-client-secret
GOOGLE_DRIVE_REDIRECT_URI=http://localhost:5000/api/googledrive/callback
GOOGLE_DRIVE_API_KEY=your-api-key

# JWT Configuration
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 320px to 767px

## 🎨 Design Features

- **Modern UI**: Clean, professional design
- **Smooth Animations**: Hover effects and transitions
- **Color Scheme**: Blue, white, and gold club colors
- **Typography**: Readable fonts with proper hierarchy
- **Accessibility**: Semantic HTML and ARIA labels

## 🔒 Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin protection
- **File Validation**: Secure file uploads
- **Rate Limiting**: Abuse prevention
- **Environment Variables**: Secure configuration

## 📊 API Documentation

The backend provides comprehensive RESTful APIs:

### Main Endpoints
- `/api/matches` - Match data and statistics
- `/api/events` - Event management
- `/api/news` - News articles
- `/api/store` - E-commerce functionality
- `/api/gallery` - Photo gallery
- `/api/schedule` - Event scheduling
- `/api/stadium` - Stadium information
- `/api/club` - Club details
- `/api/trophies` - Trophy data
- `/api/upload` - File uploads
- `/api/googledrive` - Google Drive integration

### Response Format
```json
{
  "success": true,
  "data": { ... },
  "message": "Success message"
}
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)
```bash
cd frontend
npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway)
```bash
cd backend
npm start
# Configure environment variables
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🎯 Future Enhancements

- [ ] Real database integration (MongoDB)
- [ ] User authentication system
- [ ] Live match updates
- [ ] Mobile app development
- [ ] Payment gateway integration
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)

## 📞 Support

For questions or support:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for TSSA Football Club**
# tssa-website
