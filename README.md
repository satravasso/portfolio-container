# 🐝 My Beautiful Portfolio

A modern, enterprise-grade portfolio website showcasing front-end development expertise through **micro-frontend architecture**. Built with cutting-edge technologies and clean code practices, this project demonstrates advanced React patterns, modular design, and scalable architecture.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.0.0--rc-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue.svg)](https://www.typescriptlang.org/)
[![Webpack](https://img.shields.io/badge/Webpack-5-blue.svg)](https://webpack.js.org/)

## 🎯 Project Overview

This personal portfolio website serves as both a professional showcase and a technical demonstration of modern front-end development practices. The project intentionally implements enterprise-level patterns to demonstrate capability with:

- **Micro-Frontend Architecture** using Webpack Module Federation
- **React 19** with functional components and hooks
- **TypeScript** strict mode for type safety
- **Zustand** for lightweight state management
- **i18next** for internationalization (EN/PT)
- **SASS + CSS Modules** for scalable styling
- **Theme System** with multiple color schemes

## ✨ Key Features

### 🎨 Multi-Theme System
- Three beautiful themes: **Pink** (default), **Green**, and **Blue**
- Runtime theme switching with persistent preferences
- CSS variables with data attributes for instant updates

### 🌍 Internationalization
- Multi-language support (English and Portuguese)
- Browser language detection
- Manual language switching

### 🏗️ Micro-Frontend Architecture
- Webpack Module Federation implementation
- Container application on port 8082
- Remote module loading capability
- Shared dependencies optimization

### ♿ Accessibility First
- Semantic HTML elements
- ARIA attributes
- Keyboard navigation support
- ESLint jsx-a11y enforcement

### 🧩 Component Architecture
Clean separation of concerns with modular structure:
```
Component/
├── index.tsx           # Component logic and JSX
├── interfaces.ts       # TypeScript interfaces
├── styles.module.scss  # Component-scoped styles
└── *.test.tsx         # Component tests
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 16.0.0
- **Yarn** package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio-container

# Install dependencies
yarn install
```

### Development

```bash
# Start development server
yarn start

# The app will be available at http://localhost:8082
```

### Building for Production

```bash
# Create optimized production build
yarn build

# Output will be in the /build directory
```

### Other Commands

```bash
# Run tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage (CI)
yarn test:ci

# Lint code
yarn lint

# Fix linting issues
yarn lint:fix

# Clean build directory
yarn clean
```

## 📁 Project Structure

```
src/
├── assets/              # Static assets (SVG logos, images)
├── components/          # Reusable UI components
│   ├── index.ts        # Barrel export for all components
│   ├── Button/         # Theme switcher button
│   ├── Card/           # Content card component
│   ├── Dropdown/       # Dropdown selector
│   ├── Header/         # Navigation header
│   ├── Layout/         # Main layout wrapper
│   └── Logos/          # SVG logo components
│       └── index.ts    # Barrel export for logos
├── hooks/              # Custom React hooks
├── pages/              # Page components
│   ├── index.ts        # Barrel export for all pages
│   └── MainPage/       # Landing page (modular structure)
│       ├── index.tsx   # Main page component
│       └── styles.module.scss
├── routers/            # Routing configuration
│   ├── index.ts        # Barrel export for router
│   └── Routers.tsx     # Router provider and routes
├── store/              # Zustand state stores
│   ├── index.ts        # Barrel export for stores
│   └── useThemeStore/  # Theme management
├── styles/             # Global styles and themes
│   ├── themes/        # Theme definitions (pink, green, blue)
│   └── global.scss    # Global styles
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
│   ├── index.ts        # Barrel export for utilities
│   ├── i18n.ts        # Internationalization setup
│   └── storage.ts     # Local storage utilities
├── App.tsx             # Root component
├── bootstrap.tsx       # Bootstrap file
└── index.tsx           # Entry point
```

## 🛠️ Technology Stack

### Core Technologies
- **React** 19.0.0-rc - Latest release candidate with cutting-edge features
- **TypeScript** 5.6.3 - Strict type safety
- **React Router** 6.28.0 - Client-side routing
- **Zustand** 5.0.1 - Lightweight state management

### Build & Development
- **Webpack** 5.96.1 - Module bundler with Module Federation
- **Babel** 7.x - JavaScript transpilation
- **TypeScript Loader** - TS compilation for Webpack
- **SASS** 1.80.0 - CSS preprocessing with modern compiler

### Code Quality
- **ESLint** 9.14.0 - Static code analysis
- **Prettier** 3.3.3 - Code formatting
- **Husky** 7.0.4 - Git hooks
- **TypeScript ESLint** 8.14.0 - TypeScript linting

### Testing
- **Jest** 28.1.0 - Testing framework
- **React Testing Library** 13.0.0 - Component testing
- **ts-jest** 28.0.2 - TypeScript support for Jest

### Internationalization
- **i18next** 21.8.4 - i18n framework
- **react-i18next** 11.16.9 - React bindings
- **i18next-browser-languagedetector** 6.1.4 - Language detection

## 🏛️ Architecture Highlights

### Micro-Frontend Pattern
The project implements Webpack Module Federation to demonstrate scalable architecture:

```javascript
ModuleFederationPlugin({
  name: 'container',
  remotes: {
    main: 'main@http://localhost:8081/remoteEntry.js'
  },
  shared: {
    react: { singleton: true, eager: true },
    'react-dom': { singleton: true, eager: true }
  }
})
```

### State Management
**Zustand** provides simple, performant state management without boilerplate:
- Theme state management
- No provider/context wrapping needed
- Direct store access
- Minimal re-renders

### Styling Strategy
- **CSS Modules** for component-scoped styling
- **SASS** for advanced CSS features
- **Theme system** with CSS custom properties
- **Responsive design** patterns

### TypeScript Configuration
- Strict mode enabled
- Path aliases for clean imports:
  - `@components` → `src/components` (barrel export)
  - `@components/*` → `src/components/*` (individual components)
  - `@pages` → `src/pages` (barrel export)
  - `@pages/*` → `src/pages/*` (individual pages)
  - `@routers` → `src/routers` (barrel export)
  - `@store` → `src/store` (barrel export)
  - `@utils` → `src/utils` (barrel export)
  - `@assets/*` → `src/assets/*`
  - `@styles/*` → `src/styles/*`

### Import Strategy
The project uses **barrel exports pattern** for clean, consistent imports:

```typescript
// ✅ Preferred: Using barrel exports
import { Button, Card, Layout } from '@components'
import { MainPage } from '@pages'
import { Routers } from '@routers'
import { useThemeStore } from '@store'

// ✅ Also valid: Direct component imports
import { LogoGit } from '@components/Logos'
```

## 🎨 Theming

The project includes three built-in themes with easy switching:

- **Pink Theme** (default) - Warm and cozy
- **Green Theme** - Fresh and natural
- **Blue Theme** - Professional and calm

Themes are implemented using CSS custom properties and data attributes for instant switching without page reload.

## 🌍 Internationalization

Built-in support for multiple languages:
- **English** - Default language
- **Portuguese** - Full translation support

Translations are loaded from `public/locales/` with automatic language detection based on browser settings.

## 📝 Code Quality Standards

This project follows strict code quality standards:

- **Clean Code** principles
- **SOLID** principles
- **Functional programming** patterns
- **Accessibility** (WCAG 2.1 guidelines)
- **Type safety** with TypeScript strict mode
- **Component separation** (logic/styles/types)
- **No code comments** unless for complex business logic

## 🧪 Testing

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:ci
```

Testing stack includes:
- Jest for test runner
- React Testing Library for component testing
- User-centric testing approach
- TypeScript support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👩‍💻 About the Developer

**Sabrina** - Front-End Developer

Started in 2017 as a back-end developer specializing in Java, discovered passion for front-end development and have been dedicated to creating engaging and intuitive user interfaces ever since.

### Expertise
- React ecosystem and modern patterns
- Webpack and build tooling
- Module Federation for micro-frontends
- TypeScript and type safety
- Modern CSS (SASS, CSS Modules, styled-components)
- ESLint and code quality tools
- Internationalization (i18n)

### Personal Touch
When not coding, you'll find me:
- 🐝 Appreciating bees (nature's overachievers!)
- 🎮 Playing Stardew Valley
- ☕ Enjoying cozy vibes and warm aesthetics

---

<div align="center">

**Building Buzz-Worthy Front-End Experiences: Where React Meets Cozy Vibes** 💛

Made with ❤️ and ☕ by Sabrina

</div>
