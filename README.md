# Ahib Afnan Siam — AI Software Engineer Portfolio

Personal portfolio website for **Ahib Afnan Siam**, showcasing enterprise AI engineering work, projects, research/blogs, skills, certifications, leadership, and contact information.

**Live:** Coming Soon

---

## Features

- Modern AI-focused portfolio built with **Next.js 14 App Router**
- Animated 3D particle background using **Three.js / React Three Fiber**
- Lottie-based hero illustrations and route transition loader
- Sections for About, Experience, Leadership, Projects, Research, Skills, Certifications, and Contact
- Light / Dark mode with smooth UI transitions
- Custom cursor and Framer Motion animations
- Functional contact form using **Nodemailer + Gmail SMTP**
- Private `/admin` dashboard with login/session protection
- SEO setup with sitemap, robots, manifest, Open Graph, and Twitter image support
- Fully responsive layout for desktop, tablet, and mobile

---

## Tech Stack

- **Framework:** Next.js 14, React, TypeScript
- **Styling:** Tailwind CSS, CSS Variables
- **Animation:** Framer Motion, Lottie
- **3D Background:** Three.js, @react-three/fiber, @react-three/drei
- **Email:** Nodemailer with Gmail SMTP
- **Auth:** Cookie-based admin session
- **Deployment:** Vercel-ready

---

## Folder Structure

```txt
Portfolio-main/
├── .next/                          # Next.js build directory
├── app/                            # Next.js App Router
│   ├── (site)/                     # Main site pages
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── certifications/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   ├── leadership/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── research/
│   │   │   └── page.tsx
│   │   ├── skills/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── admin/                      # Admin dashboard
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── AdminDashboard.tsx
│   │   └── page.tsx
│   ├── api/                        # API routes
│   │   ├── admin/
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   └── logout/
│   │   │       └── route.ts
│   │   └── contact/
│   │       └── route.ts
│   ├── apple-icon.tsx
│   ├── globals.css
│   ├── icon.tsx
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── opengraph-image.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── twitter-image.tsx
├── assets/                         # Static assets
│   ├── images/                     # Project and portfolio images
│   │   ├── Uttoron 1-01.png
│   │   ├── meetos.png
│   │   ├── Recruitement.jpeg
│   │   ├── aluminum_defect.png
│   │   ├── Drishti.png
│   │   └── facebook.png
│   └── lottie/                     # Lottie animation files
│       ├── loading-hand.json.json
│       ├── man-robot-workplace.json
│       ├── walk-cycling-shoes.json.json
│       └── work from home.json
├── components/                     # React components
│   ├── sections/                   # Section components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Leadership.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   └── Skills.tsx
│   ├── three/                      # 3D components
│   │   ├── FloatingObjects.tsx
│   │   ├── ParticleField.tsx
│   │   └── Scene.tsx
│   ├── ui/                         # UI components
│   │   ├── AnimatedHeroBackground.tsx
│   │   ├── AnimatedHeroLeftBackground.tsx
│   │   ├── CursorGlow.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── RouteTransitionLoader.tsx
│   │   ├── ScrollRestorationFix.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── SectionHeader.tsx
│   │   └── ThemeToggle.tsx
│   └── Providers.tsx
├── data/                           # Data files
│   ├── experience.json
│   ├── projects.json
│   └── skills.json
├── doc/                            # Documentation
│   ├── changes.log
│   └── portfolio-rating_2026-06-13_18-41.txt
├── hooks/                          # Custom hooks
│   └── useMousePosition.ts
├── lib/                            # Utility libraries
│   ├── auth.ts
│   └── site.ts
├── public/                         # Public files
│   └── Ahib_Afnan_CV.pdf
├── types/                          # TypeScript types
│   └── index.ts
├── .env.example
├── .gitignore
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Run Locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file in the project root.

```env
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=

# Contact Form - Gmail SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true

SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
CONTACT_EMAIL_TO=your-email@gmail.com

# Admin Panel
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=choose-a-strong-password
ADMIN_SESSION_SECRET=generate-a-long-random-string
```

Generate admin session secret:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

## Important Notes

* Use `.env.local` for real secrets.
* Do not push `.env.local` or Gmail App Password to GitHub.
* `.env.example` should only contain sample values.
* Contact form requires a Gmail App Password, not the normal Gmail password.
* Admin dashboard is available at:

```txt
/admin
```

---

## Main Portfolio Sections

* About
* Experience
* Leadership
* Projects
* Research & Blogs
* Skills
* Certifications & Achievements
* Contact

---

## Author

**Ahib Afnan Siam**
AI Software Engineer
Dhaka, Bangladesh

* GitHub: `https://github.com/Ahib-Afnan-Siam`
* LinkedIn: `https://www.linkedin.com/in/ahib-afnan-siam/`
* Email: [ahibafnan99@gmail.com](mailto:ahibafnan99@gmail.com)

