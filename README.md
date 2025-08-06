# Anime Explorer 🎌

A React Native mobile application that allows users to explore anime, view detailed information, manage favorites, and filter content by genre. Built as a technical showcase demonstrating modern mobile development practices.

## 📱 Features

### Core Functionality

- **Anime List Screen**: Browse anime with infinite scroll pagination
- **Anime Detail Screen**: View anime information including synopsis, genres, and ratings
- **Favorites System**: Mark anime as favorites with local persistence
- **Genre Filtering**: Filter anime by genre using an intuitive bottom sheet interface

### Technical Highlights

- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Uses FlashList for efficient list rendering
- **Navigation**: Folder based routing
- **Persistent Storage**: AsyncStorage for favorites management
- **Error Handling**: API error handling with retry functionality
- **Loading States**: Skeleton loaders and proper loading indicators

## 🎥 Demo Video

Watch the app in action:

[![Anime Explorer Demo](https://img.shields.io/badge/▶️-Watch%20Demo-red?style=for-the-badge&logo=loom)](https://www.loom.com/share/a5825fd8f79145a4a91d8b9ed57f5e76?sid=6a6d618a-b597-455e-8667-d60597d8f235)

_Click the badge above to watch a full demonstration of the app's features and functionality._

## 🛠 Tech Stack

### Core Technologies

- **React Native** with Expo
- **TypeScript** for type safety
- **App Router** for navigation
- **FlashList** for high-performance lists

### State Management & Data

- **React Context API** with custom hooks
- **AsyncStorage** for local data persistence
- **Jikan API** for anime data

### UI/UX Libraries

- **@gorhom/bottom-sheet** for filter interface
- **@expo/vector-icons** for consistent iconography
- **React Native Reanimated** for smooth animations

## 🏗 Architecture Decisions

### Project Structure

```
app/
├── (tabs)/              # Tab-based navigation screens
│   ├── index.tsx        # Main anime list screen
│   └── favorite.tsx     # Favorites screen
├── detail/              # Detail screens
│   └── [id].tsx         # Dynamic anime detail screen
└── _layout.tsx          # Root navigation layout

components/              # Reusable UI components
├── AnimeCard.tsx        # Anime list item component
├── DetailPage*.tsx      # Detail page components
└── *PageLoading.tsx     # Loading state components

providers/               # State management
└── useAnime.tsx         # Main anime data provider

Service/                 # API layer
└── animeAPI.ts          # Jikan API integration

types/                   # TypeScript definitions
├── jikan.ts             # API response types
├── genre.ts             # Genre types
└── favorite.ts          # Favorites types
```

### Key Architectural Patterns

#### 1. **Custom Hook Pattern**

- Centralized state management using `useAnime` hook
- Encapsulates API calls, caching, and state logic
- Provides clean interface for components

#### 2. **Component Composition**

- Modular component design for reusability
- TypeScript interfaces for prop validation

#### 3. **Performance Optimization**

- FlashList for virtualized scrolling
- Memoized components and callbacks
- Efficient image loading and caching

#### 4. **Error Boundaries & States**

- Dedicated error and loading components
- error messages with retry options

## 🚀 Running Locally

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (or physical device)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NyomanAdiwinanda/anime-explorer
   cd anime-explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npx expo start
   ```

4. **Run on device/simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app for physical device

## Running using Expo App

You can quickly test the app using the Expo Go app by scanning this QR code:

<img width="270" height="268" alt="Expo QR Code" src="https://github.com/user-attachments/assets/3dac5ac9-9bde-4482-9ced-f94962a03386" />

1. Download the **Expo Go** app from App Store (iOS) or Google Play Store (Android)
2. Scan the QR code above with your camera or the Expo Go app
3. The app will load automatically on your device

## API Integration

### Jikan API Usage

- **Base URL**: `https://api.jikan.moe/v4/`
- **Endpoints Used**:
  - `/anime` - Fetch anime list with pagination
  - `/anime/{id}` - Fetch detailed anime information
  - `/genres/anime` - Fetch available genres for filtering

## 🎯 Requirements Fulfilled

### ✅ Core Requirements

- [x] **Anime List Screen** with Jikan API integration
- [x] **Infinite scroll pagination** using FlashList
- [x] **Anime Detail Screen** with comprehensive information
- [x] **Favorites functionality** with AsyncStorage persistence
- [x] **Genre filtering** with bottom sheet UI
- [x] **Responsive design** and loading states
- [x] **Error handling** with retry mechanisms

### ✅ Bonus Features Implemented

- [x] **TypeScript** throughout the project
- [x] **React Native** implementation
- [x] **Custom state management** with Context API
- [x] **Performance optimization** with FlashList

## 🔄 State Management Strategy

### Context API + Custom Hooks

- **Centralized State**: Single source of truth for anime data
- **Optimistic Updates**: Immediate UI feedback for user actions
- **Cache Management**: Intelligent caching to reduce API calls
- **Persistence Layer**: AsyncStorage integration for favorites

```typescript
// Example usage
const { animeList, favorites, toggleFavorite, fetchNextPage } = useAnime();
```

## 🎨 UI/UX Design Decisions

### Visual Design

- **Dark Theme**: Modern, cinema-friendly color scheme
- **Card-based Layout**: Clean, scannable anime cards
- **Typography Hierarchy**: Clear information hierarchy
- **Responsive Grid**: Adaptive layout for different screen sizes

### Interaction Design

- **Bottom Sheet**: Intuitive genre filtering interface
- **Swipe Gestures**: Natural mobile interactions
- **Loading States**: Skeleton screens and spinners
- **Error States**: Clear error messages with recovery options

## 🧪 Testing Strategy

### Manual Testing Checklist

- [x] Anime list loading and pagination
- [x] Navigation between screens
- [x] Favorites persistence across app restarts
- [x] Genre filtering functionality
- [x] Error handling and network issues
- [x] Performance on various devices

### Future Testing Improvements

- Unit tests for utility functions
- Integration tests for API calls
- Component testing with React Native Testing Library
- E2E testing with Detox

## 🚀 Performance Optimizations

### Implemented Optimizations

1. **FlashList**: High-performance list rendering
2. **Image Optimization**: Lazy loading and caching
3. **Memoization**: React.memo and useMemo for expensive operations
4. **Bundle Splitting**: Modular architecture for better loading

### Metrics Considerations

- Fast initial load time
- Smooth 60fps scrolling
- Minimal memory usage
- Efficient network usage

## 🔮 Future Enhancements

### Planned Features

- [ ] **Advanced Search**: Search by title, year, studio
- [ ] **User Reviews**: Community ratings and reviews
- [ ] **Watchlist**: Separate from favorites for planning
- [ ] **Dark/Light Theme**: Theme switching capability
- [ ] **Deep Linking**: Share specific anime
- [ ] **Offline Mode**: Cache for offline browsing

## 🤔 Known Limitations & Trade-offs

### Current Limitations

1. **API Rate Limits**: Jikan API has rate limiting that may affect heavy usage
2. **Image Loading**: Some anime images may load slowly due to external hosting
3. **Offline Support**: Limited offline functionality (favorites only)

---

_This project demonstrates proficiency in React Native development, TypeScript, state management, API integration, and modern mobile development practices. Built as part of a technical assessment to showcase frontend development skills._
