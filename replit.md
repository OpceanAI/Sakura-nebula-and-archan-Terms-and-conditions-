# replit.md

## Overview

This is an Astro-based web application for Discord bot terms and conditions pages. The project uses Astro 5.13.2 as the main framework with TypeScript support and features a kawaii (cute Japanese aesthetic) design theme. The application provides individual themed pages for three Discord bots: Sakura (black/pink gradients), Nebula (black/purple gradients), and Archan (black/navy gradients), each with comprehensive terms of service and privacy policy content.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Astro 5.13.2**: Chosen as the primary framework for static site generation with modern web standards
- **TypeScript**: Integrated for type safety and better developer experience
- **Component Architecture**: Follows Astro's component-based structure for reusable UI elements

### Styling System
- **Custom CSS Properties**: Implements a comprehensive design token system for consistent theming
- **Kawaii Design Theme**: Features carefully curated color palette with sakura pink, nebula purple, and archan blue
- **Bot-Specific Gradients**: Individual pages with dark gradient backgrounds (black to themed colors) and ambient lighting effects
- **Onest Variable Font**: Modern typography using Onest Variable font with Semi Bold (600) base weight and heavier weights for titles
- **Responsive Design Tokens**: Includes spacing scales, typography, and gradient systems for scalable UI
- **CSS Custom Properties**: Uses modern CSS variables for maintainable theming

### Development Tools
- **Astro Check**: Integrated for TypeScript checking and validation
- **Language Server**: Provides IDE support and development tooling

### Design System Architecture
- **Token-Based Design**: Systematic approach using CSS custom properties for colors, spacing, and typography
- **Semantic Color System**: Separates brand colors from functional colors (background, text, borders)
- **Bot-Themed Pages**: Individual pages for Sakura (/sakura), Nebula (/nebula), and Archan (/archan) with bot-specific styling
- **Gradient System**: Dark gradient backgrounds with radial ambient lighting effects for premium visual experience
- **Typography Hierarchy**: Onest Variable font with weight progression (Semi Bold 600, Bold 700, Extra Bold 800)
- **Developer Experience**: Astro dev toolbar disabled for cleaner user interface

## External Dependencies

### Core Dependencies
- **@astrojs/check**: TypeScript checking and validation for Astro projects
- **astro**: Main framework for static site generation and modern web development
- **typescript**: Type system for JavaScript providing compile-time type checking
- **@fontsource-variable/onest**: Modern variable font for typography with weight range 100-900

### Development Environment
- **Node.js**: Runtime environment for the build system and development tools
- **NPM**: Package manager for dependency management

The project maintains minimal external dependencies while providing comprehensive legal pages for Discord bot services. Each bot has dedicated terms of service and privacy policy content with themed visual design, optimized for both user experience and legal compliance requirements.