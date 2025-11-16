# Hansy Fine Arts Project - Client-Side Documentation

## Table of Contents
1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Core Architecture](#core-architecture)
5. [Main Application Features](#main-application-features)
6. [Routing Structure](#routing-structure)
7. [State Management](#state-management)
8. [Authentication System](#authentication-system)
9. [API Integration](#api-integration)
10. [Key Components](#key-components)
11. [Dashboard Features](#dashboard-features)
12. [Build and Deployment](#build-and-deployment)

---

## Overview

The Hansy Fine Arts Project is a modern e-commerce web application built with React for showcasing and selling fine art pieces. The application provides a comprehensive platform for artists to display their work, customers to browse and purchase art, and administrators to manage inventory.

**Key Statistics:**
- **Total Files:** 113 JavaScript/JSX files
- **Total Lines of Code:** ~15,493 lines
- **Framework:** React 18.3.1 with Vite
- **Build Tool:** Vite 6.0.1

---

## Technology Stack

### Core Technologies
- **React 18.3.1** - UI library
- **Vite 6.0.1** - Build tool and development server
- **React Router DOM v6.28.0** - Client-side routing
- **Firebase 11.0.2** - Authentication and backend services
- **Axios 1.7.9** - HTTP client for API requests

### UI & Styling
- **Tailwind CSS 3.4.16** - Utility-first CSS framework
- **DaisyUI 4.12.14** - Tailwind CSS component library
- **PostCSS 8.4.49** - CSS processing
- **Autoprefixer 10.4.20** - CSS vendor prefixing

### State Management & Data Fetching
- **React Context API** - Global state management
- **@tanstack/react-query 5.62.11** - Server state management
- **@reduxjs/toolkit 2.2.5** - State management toolkit

### 3D & AR Features
- **Three.js 0.172.0** - 3D graphics library
- **@react-three/fiber 8.17.10** - React renderer for Three.js
- **@react-three/drei 9.120.5** - Useful helpers for react-three-fiber
- **@react-three/xr 6.4.12** - XR/AR support

### UI Components & Libraries
- **lucide-react 0.441.0** - Icon library
- **react-icons 5.4.0** - Popular icon sets
- **swiper 11.2.0** - Touch slider library
- **react-image-gallery 1.3.0** - Image gallery component
- **react-photo-view 1.2.7** - Photo viewer
- **react-responsive-carousel 3.2.23** - Carousel component
- **react-color 2.19.3** - Color picker components
- **react-draggable 4.4.6** - Drag and drop support

### Forms & User Input
- **react-dropzone 14.3.5** - File upload component
- **react-date-range 2.0.1** - Date range picker
- **country-state-city 3.2.1** - Location data

### Utilities & Helpers
- **clsx 2.1.1** - Utility for constructing className strings
- **tailwind-merge 2.5.2** - Merge Tailwind CSS classes
- **nanoid 5.0.7** - Unique ID generator
- **date-fns 4.1.0** - Date utility library
- **localforage 1.10.0** - Local storage library

### UI Feedback
- **react-hot-toast 2.4.1** - Toast notifications
- **sweetalert2 11.6.13** - Beautiful alert dialogs
- **react-spinners 0.15.0** - Loading spinners
- **canvas-confetti 1.9.3** - Confetti effects

### Other Features
- **@paypal/react-paypal-js 8.7.0** - PayPal payment integration
- **react-helmet-async 2.0.5** - Document head management
- **react-fast-marquee 1.6.5** - Marquee text effect
- **mind-ar-react 0.1.1** - AR features

---

## Project Structure

```
client-side/
├── public/                      # Static assets
│   ├── *.png                   # Product images, masks, overlays
│   ├── *.jpg                   # Art gallery images
│   └── CNAME                   # Custom domain configuration
├── src/
│   ├── api/                    # API utility functions
│   │   ├── saveUser.js        # User-related API calls
│   │   └── utlis.js           # Cloudinary upload utilities
│   ├── assets/                 # Images and static resources
│   │   ├── *.jpg              # Banner, gallery, product images
│   │   ├── *.png              # Logos, stickers, icons
│   │   └── *.svg              # Vector graphics
│   ├── authprovider/          # Legacy auth provider (deprecated)
│   ├── cartprovider/          # Shopping cart context
│   │   └── CartContext.jsx    # Cart state management
│   ├── components/            # Reusable UI components
│   │   ├── Shared/            # Shared components
│   │   │   ├── Button/
│   │   │   ├── Footer/
│   │   │   ├── Navbar/
│   │   │   └── ...
│   │   ├── Form/              # Form components
│   │   ├── AboutUs.jsx
│   │   ├── BannerSlider.jsx
│   │   ├── Cart.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCards.jsx
│   │   ├── RoomPreview.jsx
│   │   └── ... (70+ components)
│   ├── constants/             # Application constants
│   │   └── index.jsx          # Navigation links, mock data
│   ├── contexts/              # React contexts
│   │   └── theme-context.jsx # Theme management
│   ├── dashboard/             # Admin dashboard
│   │   ├── Form/             # Dashboard forms
│   │   ├── AddArt.jsx
│   │   ├── ArtCard.jsx
│   │   ├── ArtProductTable.jsx
│   │   ├── UpdateArt.jsx
│   │   └── ...
│   ├── firebase/              # Firebase configuration
│   │   └── firebase.config.js
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-click-outside.jsx
│   │   ├── use-theme.jsx
│   │   ├── useAuth.js
│   │   └── useAxiosSecure.jsx
│   ├── layout/                # Layout components
│   │   ├── MainLayout.jsx    # Main app layout
│   │   ├── header.jsx        # Dashboard header
│   │   ├── sidebar.jsx       # Dashboard sidebar
│   │   └── footer.jsx        # Dashboard footer
│   ├── mockups/               # 3D mockup components
│   │   ├── PhoneCaseMockup.jsx
│   │   └── TShirtMockup.jsx
│   ├── pages/                 # Page components
│   │   ├── Login/
│   │   ├── SignUp/
│   │   ├── Home.jsx
│   │   ├── Gallery.jsx
│   │   ├── Shop.jsx
│   │   ├── ShoppingCart.jsx
│   │   ├── CheckOut.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Contact.jsx
│   │   └── ... (20+ pages)
│   ├── providers/             # Context providers
│   │   └── AuthProvider.jsx  # Authentication provider
│   ├── routes/                # Route configuration
│   │   ├── dashboard/        # Dashboard routes
│   │   │   ├── Layout.jsx
│   │   │   └── page.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── Routes.jsx        # Main routing configuration
│   ├── service/               # API service layer
│   │   └── apiClient.js
│   ├── utilities/             # Utility functions
│   │   └── main.js
│   ├── utils/                 # Helper utilities
│   │   └── cn.js             # Class name utilities
│   ├── App.jsx                # Root App component
│   ├── App.css                # App-specific styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── .gitignore
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
└── README.md
```

---

## Core Architecture

### Application Entry Point

**File:** `src/main.jsx`

The application is bootstrapped with multiple providers:

```jsx
<StrictMode>
  <ThemeProvider storageKey="theme">
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </QueryClientProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </HelmetProvider>
    </AuthProvider>
  </ThemeProvider>
</StrictMode>
```

**Provider Hierarchy:**
1. **StrictMode** - React strict mode for development warnings
2. **ThemeProvider** - Dark/light theme management
3. **AuthProvider** - Firebase authentication state
4. **HelmetProvider** - Document head management (SEO)
5. **QueryClientProvider** - React Query for server state
6. **CartProvider** - Shopping cart state management
7. **RouterProvider** - React Router for navigation
8. **Toaster** - Global toast notifications

---

## Main Application Features

### 1. E-Commerce Features
- **Product Gallery** - Browse art pieces with masonry grid layout
- **Shopping Cart** - Add, remove, update quantities
- **Wishlist** - Save favorite items
- **Checkout Process** - Multi-step checkout with shipping/billing
- **Product Details** - Detailed product views with zoom and gallery
- **Room Preview** - Visualize art in different room settings
- **3D/AR Preview** - View products in augmented reality

### 2. User Authentication
- **Email/Password Registration** - Firebase authentication
- **Google Sign-In** - OAuth integration
- **Protected Routes** - Secured dashboard access
- **JWT Token Management** - Secure API communication
- **User Profile Management** - Update profile information

### 3. Art Categories
- **Abstract & Design** - Abstract art collection
- **Contemporary** - Modern contemporary art
- **Custom Portrait** - Commission custom portraits
- **Artsy Products** - Art-themed merchandise

### 4. Product Customization
- **Color Picker** - Select wall colors for room preview
- **Size Selection** - Choose frame sizes
- **Background Upload** - Upload custom room images
- **Drag & Drop** - Position artwork in preview

### 5. Print-on-Demand Integration
- **FinerWorks API** - Integration with printing service
- **SKU Management** - Track product SKUs
- **Product Configuration** - Select media, style, frame, glazing
- **Order Submission** - Submit orders to print service

### 6. Admin Dashboard
- **Art Management** - Add, edit, delete art products
- **Inventory Tracking** - Monitor stock levels
- **Analytics** - View sales and customer data (mock)
- **Customer Management** - View customer information (mock)
- **FinerWorks Integration** - Manage print-on-demand products

---

## Routing Structure

**File:** `src/routes/Routes.jsx`

### Public Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Landing page with featured art |
| `/shop-art` | Gallery | Browse all art pieces |
| `/bio` | Bio | Artist biography |
| `/custom-portrait` | CustomPortrait | Commission custom portraits |
| `/artsy-product` | ArtsyProduct | Art merchandise |
| `/contemporary` | Contemporary | Contemporary art gallery |
| `/abstract-designs` | AbstractDesign | Abstract art gallery |
| `/contact` | Contact | Contact form |
| `/faq` | Faq | Frequently asked questions |
| `/custom-art` | FileUploadComponent | Upload custom art |
| `/shop` | Shop | Product shop with categories |
| `/shop/category/:category` | ProductCards | Filtered by category |
| `/cart` | ShoppingCart | Shopping cart view |
| `/checkout` | CheckOut | Checkout process |
| `/art/:id` | ProductDetails | Product detail page |
| `/product-detail/:id` | ProductDetail | Alternative product view |
| `/roompreview/:id` | RoomPreview | Room visualization |
| `/finer-works-order` | OrderForm | FinerWorks order form |

### Authentication Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/login` | Login | User login |
| `/sign-up` | SignUp | User registration |

### Protected Dashboard Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/dashboard` | DashboardPage | Dashboard home |
| `/dashboard/analytics` | Analytics (mock) | Sales analytics |
| `/dashboard/reports` | Reports (mock) | Reports view |
| `/dashboard/customers` | Customers (mock) | Customer list |
| `/dashboard/products` | ArtProductTable | Product management |
| `/dashboard/finerworks` | FinerWorksSkuForm | Add FinerWorks products |
| `/dashboard/update-arts/:id` | UpdateArt | Edit art product |
| `/dashboard/art-details/:id` | ArtCard | View art details |
| `/dashboard/inventory` | AddArt | Add new art |
| `/dashboard/settings` | Settings (mock) | Settings page |

### Error Handling

| Path | Component | Description |
|------|-----------|-------------|
| `*` | Error | 404 Not Found page |

---

## State Management

### 1. Cart Context (`src/cartprovider/CartContext.jsx`)

**Purpose:** Manage shopping cart state globally

**State Structure:**
```javascript
cart = [
  {
    _id: "product-id",
    productTitle: "Art Title",
    image: "image-url",
    price: 99.99,
    quantity: 1,
    // ... other product fields
  }
]
```

**Actions:**
- `ADD_TO_CART` - Add product or increment quantity
- `UPDATE_QUANTITY` - Update product quantity
- `REMOVE_FROM_CART` - Remove product from cart

**Usage:**
```javascript
const { cart, dispatch } = useCart();

// Add to cart
dispatch({ type: 'ADD_TO_CART', payload: product });

// Update quantity
dispatch({ type: 'UPDATE_QUANTITY', payload: { _id, quantity } });

// Remove from cart
dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
```

### 2. Auth Context (`src/providers/AuthProvider.jsx`)

**Purpose:** Manage Firebase authentication state

**State:**
- `user` - Current authenticated user
- `loading` - Loading state
- `jwtFetched` - JWT token fetch status

**Methods:**
- `createUser(email, password)` - Register new user
- `signIn(email, password)` - Sign in user
- `signInWithGoogle()` - Google OAuth sign-in
- `logOut()` - Sign out user
- `updateUserProfile(name, photo)` - Update user profile

**JWT Management:**
- Automatically fetches JWT token on user login
- Stores JWT in HTTP-only cookie (withCredentials)
- Clears JWT on logout

### 3. Theme Context (`src/contexts/theme-context.jsx`)

**Purpose:** Manage light/dark theme

**Supported Themes:**
- `light` - Light theme
- `dark` - Dark theme
- `system` - Follow system preference

**Storage:** LocalStorage with key `theme`

**Usage:**
```javascript
const { theme, setTheme } = useTheme();
setTheme('dark');
```

### 4. React Query

**Purpose:** Server state management for data fetching

**Configuration:** (`src/main.jsx`)
```javascript
const queryClient = new QueryClient();
```

Used for:
- API data caching
- Background refetching
- Optimistic updates
- Error handling

---

## Authentication System

### Firebase Configuration

**File:** `src/firebase/firebase.config.js`

**Environment Variables Required:**
```
VITE_apiKey
VITE_authDomain
VITE_projectId
VITE_storageBucket
VITE_messagingSenderId
VITE_appId
```

### Authentication Flow

1. **User Registration:**
   - User fills signup form
   - Firebase creates account
   - JWT token requested from backend
   - User redirected to home

2. **User Login:**
   - Email/password or Google OAuth
   - Firebase authenticates
   - JWT token requested from backend
   - User redirected to intended page

3. **Session Management:**
   - `onAuthStateChanged` listener monitors auth state
   - JWT token stored in HTTP-only cookie
   - Automatic logout on token expiration

4. **Protected Routes:**
   - `PrivateRoute` component checks authentication
   - Redirects to login if not authenticated
   - Remembers intended destination

### Axios Interceptors

**File:** `src/hooks/useAxiosSecure.jsx`

**Features:**
- Automatic JWT token inclusion
- 401/403 error handling
- Automatic logout on auth errors
- Redirect to login page

---

## API Integration

### Base Configuration

**File:** `src/hooks/useAxiosSecure.jsx`

```javascript
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
```

### Environment Variables

```
VITE_API_URL - Backend API base URL
VITE_CLOUDINARY_CLOUD_NAME - Cloudinary cloud name
VITE_CLOUDINARY_UPLOAD_PRESET - Cloudinary upload preset
```

### API Endpoints Used

**Art Products:**
- `GET /arts` - Fetch all art products
- `GET /arts/:id` - Fetch single art product
- `GET /arts/sku/:sku` - Fetch by SKU
- `POST /arts` - Create new art product
- `PUT /arts/:id` - Update art product
- `DELETE /arts/:id` - Delete art product

**Authentication:**
- `POST /jwt` - Get JWT token
- `GET /logout` - Clear JWT token

**FinerWorks (External):**
- `POST /api/products` - Fetch product details

### Cloudinary Upload

**File:** `src/api/utlis.js`

**Function:** `uploadToCloudinary(imageData)`

Uploads images to Cloudinary for product management.

---

## Key Components

### 1. Layout Components

#### MainLayout (`src/layout/MainLayout.jsx`)
- **Purpose:** Main application layout wrapper
- **Structure:**
  - TopNavbar
  - Navbar
  - Outlet (page content)
  - Footer

#### Dashboard Layout (`src/routes/dashboard/Layout.jsx`)
- **Purpose:** Admin dashboard layout
- **Features:**
  - Collapsible sidebar
  - Responsive design
  - Click outside to close (mobile)
  - Header with search and theme toggle

### 2. Navigation Components

#### Navbar (`src/components/Navbar.jsx`)
- **Features:**
  - Sticky header
  - Theme toggle (light/dark)
  - Shopping cart indicator
  - User authentication status
  - Responsive mobile menu
  - Dropdown for user menu

#### Sidebar (`src/layout/sidebar.jsx`)
- **Features:**
  - Dashboard navigation
  - Collapsible design
  - Icon-only mode (collapsed)
  - Active link highlighting
  - Grouped navigation items

#### TopNavbar (`src/components/TopNavbar.jsx`)
- Contact information bar (if implemented)

### 3. Product Components

#### ProductCards (`src/components/ProductCards.jsx`)
- **Purpose:** Display grid of products
- **Features:**
  - Category filtering
  - Loader data from React Router
  - Empty state handling

#### Card (`src/components/Card.jsx`)
- **Purpose:** Individual product card
- **Features:**
  - Product image
  - Title and price
  - Add to cart button
  - Quick view option

#### ProductDetails (`src/pages/ProductDetails.jsx`)
- **Purpose:** Detailed product view
- **Features:**
  - Image gallery
  - Product information
  - Add to cart
  - Add to wishlist
  - Rating display
  - Stock status

#### ProductModal (`src/components/ProductModal.jsx`)
- **Purpose:** FinerWorks product customization
- **Features:**
  - Dynamic filtering (type, media, style, etc.)
  - Image preview updates
  - Configuration selection
  - Order form integration

### 4. Shopping Components

#### Cart (`src/components/Cart.jsx`)
- **Purpose:** Cart item display
- **Features:**
  - Quantity adjustment
  - Remove item
  - Price calculation
  - Item details

#### ShoppingCart (`src/pages/ShoppingCart.jsx`)
- **Purpose:** Full cart page
- **Features:**
  - Cart/Wishlist toggle
  - Sort by price
  - Clear all items
  - Total calculation
  - Checkout button

#### CheckOut (`src/pages/CheckOut.jsx`)
- **Purpose:** Checkout process
- **Features:**
  - Shipping address form
  - Billing address form
  - Payment method selection
  - Order summary

### 5. Room Preview Components

#### RoomPreview (`src/components/RoomPreview.jsx`)
- **Purpose:** Visualize art in room settings
- **Features:**
  - Gallery of room presets
  - Custom room upload
  - Wall color picker (SketchPicker)
  - Frame size selection
  - Drag and position artwork
  - Responsive design

#### CameraFeed (`src/components/CameraFeed.jsx`)
- AR camera integration (if implemented)

#### ThreeSixtyPreview (`src/components/ThreeSixtyPreview.jsx`)
- 360-degree product view

#### WebXRPreview (`src/components/WebXRPreview.jsx`)
- WebXR AR preview

### 6. Gallery Components

#### Gallery (`src/pages/Gallery.jsx`)
- **Purpose:** Art gallery page
- **Features:**
  - Masonry grid layout
  - Category navigation
  - Responsive columns
  - Hover effects

#### MasonaryGrid (`src/components/MasonaryGrid.jsx`)
- Masonry layout component

#### AbstractArtGallery (`src/components/AbstractArtGallery.jsx`)
- Abstract art-specific gallery

#### ContemporaryArtGallery (`src/components/ContemporaryArtGallery.jsx`)
- Contemporary art gallery

### 7. Home Page Components

#### BannerSlider (`src/components/BannerSlider.jsx`)
- **Purpose:** Hero section slider
- **Library:** Swiper
- **Features:**
  - Auto-play
  - Navigation arrows
  - Multiple slides
  - Background images

#### AboutUs (`src/components/AboutUs.jsx`)
- About section for home page

#### PricingTestimonials (`src/components/PricingTestimonials.jsx`)
- Testimonials and pricing

#### NewsSection (`src/components/NewsSection.jsx`)
- Latest news or blog posts

#### FileImageFormFineWork (`src/components/FileImageFormFineWork.jsx`)
- Custom art upload form

### 8. Dashboard Components

#### AddArt (`src/dashboard/AddArt.jsx`)
- **Purpose:** Add new art product
- **Features:**
  - Image upload (Cloudinary)
  - Form validation
  - Loading states
  - Success/error notifications
  - Auto-redirect on success

#### ArtProductTable (`src/dashboard/ArtProductTable.jsx`)
- **Purpose:** List all art products
- **Features:**
  - Table view
  - Edit/delete actions
  - Search/filter
  - Pagination

#### UpdateArt (`src/dashboard/UpdateArt.jsx`)
- Edit existing art product

#### ArtCard (`src/dashboard/ArtCard.jsx`)
- Single art product details view

#### FinerWorksSkuForm (`src/dashboard/Form/FinerWorksSkuForm.jsx`)
- Add FinerWorks products by SKU

### 9. Authentication Components

#### Login (`src/pages/Login/Login.jsx`)
- **Features:**
  - Email/password login
  - Google OAuth
  - Remember intended route
  - Error handling
  - Loading state
  - Redirect if already logged in

#### SignUp (`src/pages/SignUp/SignUp.jsx`)
- **Features:**
  - User registration
  - Google OAuth
  - Form validation
  - Profile photo upload
  - Terms acceptance

### 10. Utility Components

#### LoadingSpinner (`src/components/Shared/LoadingSpinner.jsx`)
- Global loading indicator

#### EmptyState (`src/components/Shared/EmptyState.jsx`)
- Empty state placeholder

#### ScrollTop (`src/components/Shared/ScrollTop.jsx`)
- Scroll to top button

#### Button (`src/components/Shared/Button/Button.jsx`)
- Reusable button component

#### Container (`src/components/Shared/Container.jsx`)
- Content container wrapper

#### Heading (`src/components/Shared/Heading.jsx`)
- Section heading component

---

## Dashboard Features

### Overview Dashboard (`src/routes/dashboard/page.jsx`)

**Displays:**
- Sales overview chart (mock data)
- Recent sales table (mock data)
- Top products list (mock data)
- Key metrics

**Mock Data:** `src/constants/index.jsx`
- `overviewData` - Monthly sales data
- `recentSalesData` - Recent customer purchases
- `topProducts` - Best-selling products

### Sidebar Navigation (`src/layout/sidebar.jsx`)

**Navigation Groups:**

1. **Dashboard**
   - Dashboard Home
   - Analytics
   - Reports

2. **Customers**
   - All Customers
   - New Customers
   - Verified Customers

3. **Products**
   - Products List
   - Add FinerWorks
   - Inventory (Add Art)

4. **Settings**
   - Application Settings

### Header Features (`src/layout/header.jsx`)

- **Search Bar** - Search functionality
- **Theme Toggle** - Light/dark mode
- **Notifications** - Bell icon
- **User Profile** - Profile picture dropdown
- **Sidebar Toggle** - Collapse/expand sidebar

---

## Build and Deployment

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
npm start

# Server runs on http://localhost:5173 (Vite default)
```

### Build for Production

```bash
# Create production build
npm run build

# Output directory: dist/
```

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

### Environment Variables

Create `.env` file in `client-side/` directory:

```env
# Firebase Configuration
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id

# Backend API
VITE_API_URL=http://localhost:5000

# Cloudinary
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

### Build Configuration

**Vite Config** (`vite.config.js`)
```javascript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
```

**Tailwind Config** (`tailwind.config.js`)
- Custom colors
- Custom fonts (Raleway, Lato, Yesteryear, Meie Script)
- DaisyUI plugin
- Dark mode support
- Custom background images

---

## Additional Notes

### Code Quality
- **ESLint** - Code linting configured
- **Globals** - Global variables configured
- **TypeScript types** - @types packages installed

### Performance Optimizations
- **Lazy Loading** - Components can be lazy loaded
- **React Query** - Automatic caching and refetching
- **Memoization** - Use of React.memo where needed
- **Code Splitting** - Via React Router

### Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

### SEO
- React Helmet for meta tags
- Dynamic page titles
- Open Graph tags (can be added)
- Structured data (can be added)

### Browser Support
- Modern browsers (ES6+)
- Chrome, Firefox, Safari, Edge
- Mobile responsive design
- Touch-friendly interfaces

---

## Future Enhancements (Suggested)

1. **Testing**
   - Unit tests (Jest, Vitest)
   - Integration tests (React Testing Library)
   - E2E tests (Playwright, Cypress)

2. **Performance**
   - Image optimization
   - Bundle size optimization
   - Service worker for offline support

3. **Features**
   - Payment gateway integration (PayPal already added)
   - Order history
   - Email notifications
   - Social media sharing
   - Reviews and ratings (fully implemented)
   - Advanced search and filters

4. **Analytics**
   - Google Analytics
   - User behavior tracking
   - Conversion tracking

5. **Security**
   - Content Security Policy
   - XSS protection
   - CSRF protection
   - Rate limiting

---

## Summary

The Hansy Fine Arts Project client-side is a well-structured, modern React application with the following highlights:

✅ **Modern Tech Stack** - React 18, Vite, Tailwind CSS  
✅ **Comprehensive Features** - E-commerce, 3D/AR preview, dashboard  
✅ **Scalable Architecture** - Context API, React Query, modular components  
✅ **User-Friendly** - Responsive design, intuitive navigation, toast notifications  
✅ **Secure** - Firebase auth, JWT tokens, protected routes  
✅ **Extensible** - Easy to add new features and pages  

**Total Code:** 113 files, ~15,493 lines of JavaScript/JSX code

This documentation provides a complete overview of the client-side codebase structure, architecture, and functionality.
