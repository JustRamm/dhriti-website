# Dhriti - Mental Health Festival Website

This is the official website for **Dhriti**, Kerala's first community-led mental health festival. The site is built to showcase the festival's mission, activities, and partnership opportunities, providing an engaging user experience with smooth animations and responsive design.

## 🚀 View Live Preview
[http://localhost:5173/](http://localhost:5173/) (When running locally)

## 🛠 Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) (Button, Card, Accordion, Sheet, etc.)

## ✨ Features

- **Interactive Gallery:** Visual storytelling with parallax scrolling and immersive animations.
- **Activity Showcase:** Detailed views of mental health activities, workshops, and events.
- **Community Voices:** Testimonials and stories from founders and community members.
- **Responsive Design:** Fully optimized experience across all devices, including mobile landscape users.
- **Smooth Animations:** Powered by Framer Motion for a premium feel.

## ⚙️ Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js) or **pnpm**

## 📥 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JustRamm/Dhrithi.git
   cd Dhrithi
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: The `--legacy-peer-deps` flag helps verify dependency compatibility if minimal versions conflict)*

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

## 🏗 Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `dist` folder containing the static assets ready for deployment.

## 📂 Project Structure

```
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── components/ui/   # Reusable UI components
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main application logic
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & Tailwind
├── index.html           # HTML entry point
├── package.json         # Project metadata & scripts
└── vite.config.ts       # Vite configuration
```

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---
Developed with ❤️ for the Dhriti Community.
