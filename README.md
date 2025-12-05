# 🔥 FireGames - Modern Gaming Platform

<div align="center">

![FireGames Banner](https://img.shields.io/badge/FireGames-Premium%20Gaming-10b981?style=for-the-badge&logo=gamepad&logoColor=white)

**Discover Your Next Gaming Adventure**

[![Live Demo](https://img.shields.io/badge/Live-Demo-14b8a6?style=for-the-badge&logo=vercel)](https://abdelrhman20o2.github.io/FireGames/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-0f172a?style=for-the-badge&logo=github)](https://github.com/AbDeLrHmAn20o2/FireGames)
[![License](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](LICENSE)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎮 Overview

**FireGames** is a cutting-edge gaming platform that provides users with access to a curated collection of free-to-play games. Built with modern web technologies and featuring a stunning **Cyberpunk Emerald & Teal** theme, FireGames delivers an immersive browsing experience inspired by industry leaders like Steam, Epic Games, and GeForce NOW.

### 🌟 Why FireGames?

- **Modern Design**: Sleek, responsive interface with glassmorphism effects
- **Real-time Search**: Instantly filter through hundreds of games
- **Detailed Information**: Comprehensive game details, system requirements, and screenshots
- **Category Filtering**: Browse games by genre (MMORPG, Shooter, Sailing, etc.)
- **Mobile-First**: Fully responsive design for all devices
- **Fast Performance**: Optimized loading and smooth animations

---

## ✨ Features

### 🎨 **Premium UI/UX**
- **Cyberpunk Theme** with Emerald & Teal color scheme
- **Animated Background** with floating gradient orbs
- **Glassmorphism** cards and navigation
- **Smooth Transitions** and micro-interactions
- **Custom Loader** with rotating rings animation

### 🔍 **Smart Search & Filter**
- **Real-time Search** with debouncing (300ms delay)
- **Category Filters** with icon indicators
- **Dynamic Content** updates
- **View Toggles** (Grid/List modes)

### 🎮 **Game Details Modal**
- **Full-Screen Overlay** with blur effect
- **Screenshot Gallery** with hover effects
- **System Requirements** display
- **Developer & Publisher** information
- **Direct Game Links** to play instantly

### 📱 **Responsive Design**
- **Mobile-Optimized** navigation with collapsible menu
- **Tablet-Friendly** grid layouts
- **Desktop-Enhanced** multi-column displays
- **Touch-Optimized** interactions

### ⚡ **Performance Optimizations**
- **Lazy Loading** for images
- **Efficient DOM** manipulation
- **Debounced Search** for better performance
- **GPU-Accelerated** animations
- **Modular JavaScript** with ES6 modules

---

## 🛠️ Technologies

### **Frontend**
| Technology | Purpose | Version |
|------------|---------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Markup | HTML5 |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Styling | CSS3 |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Logic | ES6+ |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white) | Framework | 5.3.6 |

### **Libraries & APIs**
- **Font Awesome** 6.5.1 - Icon library
- **Google Fonts** - Orbitron & Rajdhani fonts
- **Free-to-Play Games Database API** - Game data via RapidAPI

### **Tools & Workflow**
- Git & GitHub for version control
- VS Code for development
- Chrome DevTools for debugging

---

## 🚀 Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git installed on your machine

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/AbDeLrHmAn20o2/FireGames.git
cd FireGames
```

2. **Open the project**
```bash
# Simply open index.html in your browser
# Or use a local server (recommended)
```

3. **Using Live Server (VS Code)**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

4. **Using Python**
```bash
# Python 3
python -m http.server 8000

# Navigate to http://localhost:8000
```

5. **Using Node.js**
```bash
npx http-server
```

---

## 💻 Usage

### Browse Games
1. Open the application in your browser
2. Games load automatically (default: MMORPG category)
3. Scroll through the game cards

### Filter by Category
- Click on category buttons in the navigation bar
- Available categories:
  - 🐉 MMORPG
  - 🎯 Shooter
  - ⛵ Sailing
  - 💀 Permadeath
  - 🦸 Superhero
  - 🎨 Pixel

### Search Games
- Type in the search bar at the top
- Results filter in real-time
- Search by game title or description

### View Game Details
- Click on any game card
- View full description, screenshots, and system requirements
- Click "Play Now" to launch the game

### Change View Mode
- Toggle between Grid and List views
- Click the view icons in the category header

---

## 🔌 API Reference

### Free-to-Play Games Database API

**Base URL:** `https://free-to-play-games-database.p.rapidapi.com`

#### Get Games by Category
```javascript
GET /api/games?category={category}

Headers:
  x-rapidapi-key: YOUR_API_KEY
  x-rapidapi-host: free-to-play-games-database.p.rapidapi.com
```

#### Get Game Details
```javascript
GET /api/game?id={gameId}

Headers:
  x-rapidapi-key: YOUR_API_KEY
  x-rapidapi-host: free-to-play-games-database.p.rapidapi.com
```

**Note:** To use your own API key, update it in `js/games.js` and `js/details.js`.

---

## 📁 Project Structure

```
FireGames/
│
├── index.html                 # Main HTML file
│
├── css/
│   ├── style.css             # Main stylesheet (1100+ lines)
│   └── enhancements.css      # Additional UI styles
│
├── js/
│   ├── index.js              # App initialization
│   ├── games.js              # Game fetching & management
│   ├── ui.js                 # UI rendering
│   └── details.js            # Game details modal
│
├── images/
│   ├── logo-sm.png           # Logo
│   └── wraper.png            # Hero image
│
├── ENHANCEMENTS.md           # Technical documentation
└── README.md                 # This file
```

---

## 🎨 Design System

### Color Palette

```css
/* Cyberpunk Emerald & Teal Theme */
--primary-gradient: linear-gradient(135deg, #10b981 0%, #059669 100%);
--secondary-gradient: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
--accent-gradient: linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%);

--neon-teal: #14b8a6;
--neon-emerald: #10b981;
--neon-cyan: #06b6d4;

--dark-bg: #0f172a;
--card-bg: rgba(30, 41, 59, 0.85);

--text-primary: #f1f5f9;
--text-secondary: #cbd5e1;
```

### Typography
- **Headings:** Orbitron (Google Fonts) - Futuristic, bold
- **Body Text:** Rajdhani (Google Fonts) - Clean, readable
- **Weights:** 300, 400, 500, 600, 700, 900

### Spacing
- Base unit: `1rem = 16px`
- Gaps: `0.5rem`, `1rem`, `1.5rem`, `2rem`
- Padding: `0.75rem`, `1rem`, `1.5rem`, `2rem`

### Border Radius
- Small: `8px - 10px`
- Medium: `12px - 15px`
- Large: `20px - 30px`
- Circle: `50%`

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Steps to Contribute

1. **Fork the Project**
```bash
# Click the 'Fork' button on GitHub
```

2. **Create Feature Branch**
```bash
git checkout -b feature/AmazingFeature
```

3. **Commit Changes**
```bash
git commit -m 'Add some AmazingFeature'
```

4. **Push to Branch**
```bash
git push origin feature/AmazingFeature
```

5. **Open Pull Request**
- Go to your fork on GitHub
- Click "New Pull Request"
- Describe your changes

### Contribution Guidelines
- Follow existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed
- Add comments for complex logic

---

## 📊 Features Roadmap

### ✅ Completed
- [x] Modern UI with Cyberpunk theme
- [x] Real-time search functionality
- [x] Category filtering
- [x] Game details modal
- [x] Responsive design
- [x] Smooth animations

### 🚧 In Progress
- [ ] User authentication
- [ ] Favorites/Wishlist system
- [ ] Game ratings and reviews

### 📝 Planned
- [ ] Advanced filters (Platform, Release Date)
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] Social sharing features
- [ ] PWA (Progressive Web App) support
- [ ] Game comparison feature

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 AbDeLrHmAn20o2

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 👤 Contact

**AbDeLrHmAn20o2**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AbDeLrHmAn20o2)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/m/in/abdelrhman2002)

**Project Link:** [https://github.com/AbDeLrHmAn20o2/FireGames](https://github.com/AbDeLrHmAn20o2/FireGames)

**Live Demo:** [https://abdelrhman20o2.github.io/FireGames/](https://abdelrhman20o2.github.io/FireGames/)

---

## 🙏 Acknowledgments

- [Free-to-Play Games Database API](https://www.freetogame.com/api-doc) for game data
- [Bootstrap](https://getbootstrap.com/) for responsive framework
- [Font Awesome](https://fontawesome.com/) for beautiful icons
- [Google Fonts](https://fonts.google.com/) for typography
- Inspired by [Steam](https://store.steampowered.com/), [Epic Games](https://www.epicgames.com/), and [GeForce NOW](https://www.nvidia.com/en-us/geforce-now/)

---

## 💖 Support

If you found this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features
- 🤝 Contributing to the codebase
- 📢 Sharing with others

---

<div align="center">

**Made with ❤️ by AbDeLrHmAn20o2**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=AbDeLrHmAn20o2.FireGames)

⭐ **Don't forget to star this repo if you like it!** ⭐

</div>
