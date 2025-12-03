# Autissm IT Solution - Website Setup Guide

## Getting Started

Your modern startup website is ready! Here's how to customize it:

## 1. Add Team Photos

Place your team member photos in the `public/images/` folder:

- `founder1.jpg` - First co-founder/CEO photo
- `founder2.jpg` - Second co-founder/CEO photo  
- `founder3.jpg` - Third co-founder/CEO photo
- `founder4.jpg` - Fourth co-founder/CEO photo

**Recommended image specifications:**
- Format: JPG or PNG
- Size: 400x400 pixels (square) or similar
- File size: Under 500KB per image

## 2. Update Team Information

Edit `src/App.js` and find the `Team` component section. Update each founder object:

```javascript
{
  id: 1,
  name: "Your Name Here", // Replace with actual name
  role: "Co-Founder & CEO",
  image: "/images/founder1.jpg",
  portfolio: "https://your-portfolio-url.com", // Add your portfolio link
  bio: "Your bio description here" // Add your personal bio
}
```

## 3. Update Contact Information

Edit `src/App.js` and find the `Footer` component. Update:
- Email address
- Phone number
- Any other contact details

## 4. Update Portfolio Projects

Edit `src/App.js` and find the `Portfolio` component. Update the projects array with your actual projects.

## 5. Update Company Information

- Edit `public/index.html` to update meta description
- Edit `public/manifest.json` for app metadata
- Update any company-specific text in `src/App.js`

## Running the Development Server

```bash
npm start
```

The website will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React 19
- Tailwind CSS 3
- Modern responsive design
- Smooth scrolling navigation
- Professional animations

## Features

✅ Modern, professional design
✅ Fully responsive (mobile, tablet, desktop)
✅ Team section with photo placeholders
✅ Portfolio section
✅ Smooth scrolling navigation
✅ Contact/Footer section
✅ Ready for customization

Enjoy building your startup website! 🚀

