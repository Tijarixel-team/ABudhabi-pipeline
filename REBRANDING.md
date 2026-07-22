# Rebranding Guide

This project is built so another industrial company can reuse the website without rewriting components.

1. Replace company identity in `src/config/company.ts`.
2. Update page metadata and keywords in `src/config/seo.ts`.
3. Swap theme tokens or add a preset in `src/config/theme.ts`.
4. Replace logo and image paths in `src/config/assets.ts`.
5. Put new raster images in `public/images`.
6. Put approved PDFs in `public/documents`.
7. Replace products in `src/content/products.ts`.
8. Replace industries in `src/content/industries.ts`.
9. Replace capabilities, certifications, projects and downloads in their matching `src/content` files.
10. Update navigation labels and dropdowns in `src/config/navigation.ts`.
11. Connect an email provider in `src/app/api/contact/route.ts` and add provider variables to `.env.example`.

Two theme presets are included: `adpfIndustrial` and `cleanEnergy`. Change `activeTheme` in `src/config/theme.ts`, then mirror the desired tokens into `src/app/globals.css` or wire a runtime token provider if multiple brands need to ship from one build.
