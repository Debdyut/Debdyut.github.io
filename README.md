# Debdyut Hajra - Professional Portfolio

Technical Product Engineer portfolio showcasing expertise in payments integration, cloud architecture, and ARM embedded systems.

## 🚀 Quick Start

### Prerequisites
- Hugo (install via `brew install hugo`)
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/Debdyut/Debdyut.github.io.git
cd Debdyut.github.io

# Switch to development branch
git checkout develop/hugo-site

# Start development server
cd portfolio
hugo server --bind 0.0.0.0 --port 1313

# Open in browser
open http://localhost:1313
```

### Build for Production

```bash
cd portfolio
hugo --minify
```

## 🎨 Design

- **Style**: Minimal black & white with line art aesthetics
- **Typography**: Monospace fonts (Monaco, Menlo, Ubuntu Mono)
- **Emojis**: Grayscale filtered for monochrome appearance
- **Responsive**: Mobile-first design with breakpoints

## 📁 Structure

```
portfolio/
├── config.toml          # Site configuration
├── content/             # Markdown content
│   ├── _index.md       # Homepage
│   ├── projects/       # Project showcase
│   ├── contact.md      # Contact information
│   └── opensource.md   # Community contributions
├── themes/basic/       # Custom minimal theme
└── static/             # Static assets
```

## 🔧 Development Commands

```bash
# Start development server
hugo server

# Start with drafts and future posts
hugo server --buildDrafts --buildFuture

# Start on specific port
hugo server --port 8080

# Build site
hugo

# Build with minification
hugo --minify

# Clean build cache
hugo --gc
```

## 🚀 Deployment

Automated deployment via GitHub Actions:
- Push to `develop/hugo-site` branch
- GitHub Actions builds and deploys to `gh-pages`
- Site available at https://debdyut.github.io

## 📝 Content Updates

1. Edit markdown files in `content/`
2. Update configuration in `config.toml`
3. Modify theme in `themes/basic/`
4. Test locally with `hugo server`
5. Commit and push to trigger deployment

---

**Live Site**: https://debdyut.github.io  
**Author**: Debdyut Hajra  
**Role**: Technical Product Owner @Delta Air Lines