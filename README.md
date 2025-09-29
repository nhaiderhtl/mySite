# Personal Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, designed to showcase your skills, projects, and experience as a full-stack developer.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that looks great on all devices
- **TypeScript**: Built with TypeScript for better code quality and developer experience
- **Interactive**: Smooth scrolling navigation and interactive components
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **GitHub Pages Ready**: Configured for automatic deployment to GitHub Pages

## 🚀 Live Demo

Visit the live site: `https://[YOUR_USERNAME].github.io/mySite/`

## 🛠️ Technologies Used

- **Frontend**: React 19, TypeScript
- **Styling**: CSS3 with modern features (Grid, Flexbox, Custom Properties)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with GitHub Actions
- **Package Manager**: npm

## 📁 Project Structure

```
mySite/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About me section
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Projects portfolio
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   ├── App.css              # Global styles
│   └── index.css            # Base styles
├── public/
├── .github/workflows/       # GitHub Actions for deployment
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/[YOUR_USERNAME]/mySite.git
   cd mySite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the site

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Update configuration files**:
   - In `package.json`, replace `[USERNAME]` with your GitHub username
   - In `vite.config.js`, update the `base` path if your repository name is different
   - In `index.html`, update the meta tags with your information

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"
   - The site will automatically deploy when you push to the main branch

4. **Access your site**:
   Your portfolio will be available at `https://[YOUR_USERNAME].github.io/mySite/`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Header.tsx**: Update navigation brand name
2. **src/components/Hero.tsx**: Update name, title, and description
3. **src/components/About.tsx**: Update about text, stats, and achievements
4. **src/components/Skills.tsx**: Update skills and proficiency levels
5. **src/components/Projects.tsx**: Update with your actual projects
6. **src/components/Contact.tsx**: Update contact information
7. **src/components/Footer.tsx**: Update footer information
8. **index.html**: Update meta tags and title

### Styling

- Colors and themes can be customized in the CSS files
- The color scheme uses CSS custom properties for easy theming
- Responsive breakpoints are defined in the CSS files

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update the navigation in `src/components/Header.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (767px and below)

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- Alt text for images (when added)
- High contrast ratios

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (manual)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider contributing back to help others!

## 📞 Support

If you have questions or need help customizing the portfolio, feel free to open an issue or contact me.

---

**Made with ❤️ using React and TypeScript**
