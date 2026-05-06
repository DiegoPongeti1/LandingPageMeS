# 🖥️ Micro&Soft — Landing Page

A professional and responsive **Landing Page** built for **Micro&Soft**, a technology company based in Franca, São Paulo, Brazil. The page presents the company's core services, key differentiators, partner companies, and full contact information — all in a clean and engaging single-page layout.

---

## 🚀 Tech Stack

| Technology                                          | Purpose                          |
| --------------------------------------------------- | -------------------------------- |
| [Next.js 16](https://nextjs.org/) (App Router)      | React framework with SSR support |
| [React 19](https://react.dev/)                      | UI library                       |
| [TypeScript](https://www.typescriptlang.org/)       | Static typing                    |
| [TailwindCSS](https://tailwindcss.com/)             | Utility-first CSS styling        |
| [Lucide React](https://lucide.dev/)                 | Icon set for feature cards       |
| [@phosphor-icons/react](https://phosphoricons.com/) | Icon set for contact section     |
| [@radix-ui/react-slot](https://www.radix-ui.com/)   | Composable UI primitives         |
| [class-variance-authority](https://cva.style/)      | Button variant management        |

---

## ✨ Features

### 🔴 Header

The page opens with a bold red header that prominently displays the **Micro&Soft** company logo, rendered with Next.js's optimized `<Image>` component to ensure fast loading. The header sets the brand tone immediately and is fully centered for visual impact.

---

### 🃏 Why Choose Us — Feature Cards

A dedicated section titled **"Por que escolher a Micro & Soft?"** ("Why choose Micro & Soft?") presents three highlight cards in a responsive grid layout:

- **Immediate Support** — Highlights the company's commitment to fast and reliable technical assistance.
- **All of Brazil** — Shows the company's nationwide reach and availability.
- **Industries & Services** — Emphasizes expertise across footwear factories, industrial businesses, and retail.

Each card features a colored icon (from Lucide React), a title, a description, a red top border accent, and a subtle drop shadow — designed to draw attention and build trust.

---

### 🤝 Partner Companies — Infinite Carousel

A fully animated **auto-scrolling infinite carousel** showcases the companies that partner with Micro&Soft. Key behaviors include:

- The carousel loops smoothly using CSS `translateX` animation (25-second cycle), duplicating partner logos 3× to create a seamless infinite scroll effect.
- **Clicking any partner logo** pauses the carousel animation and opens an interactive **modal popup**.
- The modal displays the company's name, type, description, and (when available) a **"Learn More"** button that opens the partner's website or Instagram in a new tab.
- Registered partners include **Veromoc** (footwear), **Coberchapas** (industrial sheets), and **Classe Couro** (leather goods).

---

### 📞 Contact Section

A clean contact card provides all the ways to reach Micro&Soft:

| Method      | Detail                                                                     |
| ----------- | -------------------------------------------------------------------------- |
| 📞 Phone    | (16) 3724-0011 — clickable `tel:` link                                     |
| 📧 Email    | falecom@microesoft.com.br — clickable `mailto:` link                       |
| 📍 Address  | R. Augusto Marques, 1711 - Vila Flores, Franca - SP — opens in Google Maps |
| 💬 WhatsApp | Direct link to WhatsApp with a pre-filled message                          |

The **WhatsApp button** is prominently styled in green and opens a conversation with the message:

> _"Olá! Gostaria de mais informações sobre os serviços da Micro&Soft."_

---

### Footer

A simple, clean footer with a light beige background, displaying the copyright notice for Micro&Soft.

---

## 🎨 Color Palette

| Color           | Hex / Tailwind          | Used In                                |
| --------------- | ----------------------- | -------------------------------------- |
| Header Red      | `#be0505e8`             | Header background                      |
| Dark Red        | `#800000`               | Hover effects, modal button            |
| Card Red Border | `red-600`               | Top accent on feature cards            |
| WhatsApp Green  | `green-500 / green-600` | WhatsApp CTA button                    |
| White           | `#ffffff`               | Main page background                   |
| Light Beige     | `#FDF6ec`               | Footer background                      |
| Light Gray      | `gray-100`              | Partners & Contact section backgrounds |

---

## 🏗️ Project Architecture

The project follows the **Next.js App Router** structure. All page-specific components live inside `app/_components/`, keeping the codebase organized and scalable.

**Main components:**

- `layout.tsx` — Root layout, global fonts (Geist), and metadata
- `page.tsx` — Main page that assembles all sections
- `Header.tsx` — Company logo header
- `CardsChamativos.tsx` — Feature highlight cards
- `Parceiros.tsx` — Animated partner carousel with modal trigger _(Client Component)_
- `InfosEmpresas.tsx` — Partner details modal popup
- `Infos.tsx` — Contact information section _(Client Component)_
- `Footer.tsx` — Page footer

**Reusable UI:**

- `components/ui/button.tsx` — Flexible button component with multiple variants and sizes (based on shadcn/ui patterns)
- `lib/utils.ts` — `cn()` utility to merge TailwindCSS classes conditionally

---

## 📄 License

All rights reserved © Micro&Soft.
