---
target: the website (homepage representative target)
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 5
timestamp: 2026-08-05T17-49-43Z
slug: src-app-page-tsx
---
# ADPF Website Design Critique

## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of system status | 3/4 | Navigation and form states exist, but filtering and some async failures lack feedback. |
| 2 | Match between system and real world | 2/4 | Industrial terminology is relevant, but unexplained acronyms and implementation-facing copy break the buyer's mental model. |
| 3 | User control and freedom | 3/4 | Navigation is direct and the mobile menu supports Escape; video cannot be paused and the desktop submenu is hover-dependent. |
| 4 | Consistency and standards | 3/4 | Components are cohesive, but CTA language fragments across quote, engineering contact, enquiry, and catalogue actions. |
| 5 | Error prevention | 2/4 | Form validation exists, but a visible nonfunctional file upload and unhandled request failures create preventable errors. |
| 6 | Recognition rather than recall | 3/4 | Labels and breadcrumbs help, while dense navigation and undefined technical acronyms add interpretation cost. |
| 7 | Flexibility and efficiency | n/a | Persuade surface; expert accelerators are not a meaningful success criterion. |
| 8 | Aesthetic and minimalist design | 2/4 | Clean foundations are weakened by repetitive cards, editorial caveats, and a dark-on-dark section heading. |
| 9 | Error recognition and recovery | 2/4 | Local field errors are useful, but request failures lack robust recovery and success/error treatments are not differentiated. |
| 10 | Help and documentation | n/a | Persuade surface; technical documentation is product proof rather than interface help. |
| **Total** |  | **20/32** | **Acceptable — significant trust, accessibility, and conversion work remains.** |

## Design Specificity Verdict

The site is product-specific in subject matter but only moderately authored in its structure. The hero, Abu Dhabi positioning, composite-pipe vocabulary, industrial blue palette, and gold accent establish a credible category identity. Below the hero, the page becomes an interchangeable B2B template: stats strip, split image/text, three cards, six-card grid, numbered process cards, and a generic CTA. Products, industries, certifications, projects, locations, and process steps use nearly the same rounded white-card grammar, flattening their meaning.

The largest missed opportunity is to make ADPF's actual engineering character the visual language: filament winding, pipe cross-sections, joint systems, dimensional scale, inspection, testing, approvals, installed infrastructure, and the company's history since 1981.

The deterministic scan found one advisory across `src`: the two-axis decorative grid background in `src/app/globals.css:82`, categorized as a generic generated-UI signature. The homepage-file-only scan returned no findings. This advisory is not automatically a defect: a blueprint/measurement grid can suit an engineering brand if it supports real technical content. As a generic decoration, it should be removed or made semantically meaningful.

No reliable browser overlay was produced. Browser automation was not exposed, and the independent browser/detector worker did not return usable evidence within the bounded pass. Findings about source behavior are verified from code; responsive appearance is identified as inference.

## Overall Impression

The foundation is coherent and technically respectable, and the hero begins with scale and confidence. The single biggest opportunity is to stop presenting the site as a development preview and turn it into a proof-led engineering sales tool. Today, trust rises in the hero and then falls through public caveats, placeholder language, unverified claims, and a contact path that admits it is incomplete.

## What's Working

- The hero proposition is clear, relevant, and visually grounded in industrial scale and Abu Dhabi.
- The homepage follows a sensible commercial sequence: positioning, proof, products, applications, capability, and enquiry.
- The implementation has solid fundamentals: reusable tokens and components, semantic regions, visible focus outlines, labeled controls, inline validation, `role="status"`, Escape support for the mobile menu, responsive grids, and CSS reduced-motion handling.

## Priority Issues

### P1 — Public copy exposes staging and implementation details

**Why it matters:** Phrases such as “typed data files,” “reusable process sequence,” “current demo API,” “frontend-only file picker,” placeholder notes, verification caveats, and “pending final company approval” make an established manufacturer look unfinished.

**Fix:** Remove implementation commentary from every public route. Replace it with approved buyer-facing copy. Keep verification status in an internal editorial checklist or CMS, and do not publish uncertain claims as proof.

**Suggested command:** `$impeccable clarify`

### P1 — The capability heading has a code-level contrast failure

**Why it matters:** The homepage places `SectionHeader` inside `bg-primary`, while the component hardcodes its heading to `text-primary`. The main heading effectively disappears against its background; the muted paragraph is also likely too weak.

**Fix:** Add an inverse `SectionHeader` variant with white heading text and contrast-checked supporting colors. Verify all foreground/background combinations numerically against WCAG AA.

**Suggested command:** `$impeccable colorize`

### P1 — Navigation is overloaded and the Products submenu is hover-dependent

**Why it matters:** The header exposes nine destinations plus a quote CTA, weakening orientation and conversion focus. `group-hover` does not provide a complete keyboard, touch, or explicit disclosure interaction.

**Fix:** Consolidate navigation to roughly five primary groups, such as Products, Applications, Capabilities, Company, and Resources, with Request a Quote as the action. Build the submenu as a button-controlled disclosure using `aria-expanded`, Escape, focus management, click-outside behavior, and a visible focus path.

**Suggested command:** `$impeccable distill`

### P1 — The enquiry experience promises capabilities it does not provide

**Why it matters:** The page invites an engineered quote while saying the API is a demo. The file picker is visible but its file is not submitted. `fetch` and JSON failures are not caught, and the first-contact form asks for substantial information.

**Fix:** Hide upload until storage and delivery work. Connect production email/CRM delivery, add `try/catch`, preserve entered data, distinguish success from error visually and semantically, and offer a retry path. Reduce required first-contact fields and progressively request technical detail.

**Suggested command:** `$impeccable harden`

### P1 — The autoplay hero does not honor reduced-motion needs

**Why it matters:** CSS reduced-motion rules do not stop a full-screen looping video. The asset can add discomfort, bandwidth cost, battery use, and a slower first useful view on mobile.

**Fix:** Use the poster when `prefers-reduced-motion: reduce` is active, provide a visible pause/play control, and serve a lighter mobile treatment with conservative loading.

**Suggested command:** `$impeccable adapt`

## Cognitive Load

The page has moderate cognitive load with two checklist failures: single focus and minimal choices. Chunking, grouping, hierarchy, sequencing, working-memory continuity, and progressive disclosure are generally sound.

Decision points above four visible options:

- Desktop header: nine links plus one quote action.
- Open mobile menu: nine sibling destinations.
- Footer Navigation group: eight links.
- Enquiry-type select: five substantive choices.
- Product-interest select: four substantive choices plus the placeholder.

CTA language should be standardized around one primary action. “Request a Quote,” “Contact Engineering Team,” “Start an enquiry,” “Enquiry,” and “Request Catalogue” currently imply overlapping but unexplained paths.

## Persona Red Flags

### Jordan — First-time buyer

- Has ten header choices before learning which route answers “Is this system suitable for my project?”
- Encounters GRP, GRV, GRE, FRP, FM, API, WRc, and similar terminology without definitions or a selection guide.
- Sees multiple contact labels without knowing when to request a quote, contact engineering, or request a catalogue.
- Encounters implementation language that offers no help in evaluating a supplier.

### Riley — Deliberate evaluator

- Finds conflicting capacity evidence in internal data while the visible stat is marked verified.
- Sees certification claims paired with instructions to verify their scope before launch.
- Encounters placeholder imagery and downloadable documents rather than authoritative technical proof.
- Can select a file that is not included in the submitted payload.
- Can trigger a network or malformed-response failure without a durable recovery message.

### Casey — Distracted mobile visitor

- Loads a full-screen autoplay video with no pause control.
- Loses the floating Enquiry action below the medium breakpoint.
- Opens an ungrouped menu with nine sibling choices.
- Must complete a long form in one session with no draft persistence.
- Reaches proof content only after a fixed header and full-height hero.

## Additional Changes Worth Making

### Content and trust

- Verify production capacity, line count, product dimensions, pressure ratings, certificate validity/scope, locations, and legal naming before launch.
- Replace generated or placeholder photography and PDFs with approved, current assets.
- Turn certifications into dated, scoped, downloadable proof rather than generic cards.
- Add real project evidence: location, application, product, scope, year, quantified outcome, and publication permission.
- Explain acronyms on first use and add a practical system-selection path by application, service conditions, pressure, diameter, resin, and approval.
- Replace uncited stat notes with concise public proof or remove the statistic until verified.

### Visual system and hierarchy

- Differentiate products, industries, capabilities, certifications, projects, and locations instead of rendering all as the same card family.
- Use technical drawings, section diagrams, scale references, testing imagery, and manufacturing details as branded visual motifs.
- Add narrative escalation after the hero; alternate dense proof, large imagery, technical diagrams, and concise decision modules rather than repeating equal-height card grids.
- Reserve the decorative technical grid for real measurement/blueprint contexts; otherwise use a quieter surface.
- Review all dark-section text colors and subtle alpha text for contrast.
- Keep border radii, shadows, and pill badges purposeful; their repetition currently makes the site feel component-library-led.

### Navigation and conversion

- Add a skip-to-content link before the fixed header.
- Group mobile navigation and reflect nested Product links rather than hiding submenu destinations.
- Standardize one primary conversion label and one secondary technical-resource action.
- Keep a mobile enquiry action in the thumb zone without obscuring content.
- Make product and application cards support a clear next step; the current industry cards are informational dead ends.
- Add clear result counts and useful empty states to product filtering.

### Forms and feedback

- Add input `autocomplete` tokens, appropriate input modes, required/optional cues, and field-level `aria-describedby` relationships.
- Move focus to the first invalid field after submission and announce the error summary.
- Preserve user input on request failure and ideally across accidental refresh/interruption.
- Use distinct semantic success and error states rather than one neutral status container.
- Turn phone numbers and email addresses into `tel:` and `mailto:` actions.
- Clarify accepted attachment types and size limits once upload is real.

### Accessibility and motion

- Convert the desktop submenu to an accessible disclosure pattern.
- Stop or replace video for reduced-motion users and expose media controls.
- Verify heading order and landmarks across every route.
- Confirm animated counters expose stable readable values and do not delay comprehension.
- Test keyboard-only navigation, 200% zoom, screen-reader announcements, and touch targets on all routes.
- Review decorative versus informative image alt text consistently.

### Mobile and performance

- Reduce the hero's mobile height or expose proof/next-step content sooner.
- Use appropriately encoded/responsive video or a static mobile poster.
- Test card density, map embeds, long form fields, and sticky/fixed elements at narrow widths.
- Lazy-load below-fold media and third-party maps behind an interaction or consent-aware placeholder where appropriate.
- Prevent layout shifts by reserving media dimensions and check long Arabic/English content wrapping.

### Internationalization and local relevance

- Decide whether Arabic is a launch requirement and design bidirectional navigation, forms, tables, and technical content rather than treating translation as a late copy swap.
- Format units professionally: use `m²`; clarify annual metric tonnes; standardize dates, phone numbers, and technical notation.
- Add privacy and terms content appropriate to the enquiry form and target markets before production.

## Minor Observations

- `ProductPreview` uses empty image alt text; this may be valid when the linked title fully names the destination, but informative product imagery should have concise alt text.
- Footer contact details are not clickable.
- The desktop and mobile page-hero image crops need visual verification at representative widths.
- The fixed header active state is useful, but nested-product active state and submenu state need explicit testing.
- There is no `PRODUCT.md` or `DESIGN.md`; product truth and the visual rationale are therefore undocumented.

## Questions to Consider

- If ADPF's strongest promise is engineering certainty, why does the site foreground uncertainty?
- Which single action matters most: shortlist a system, download verified technical data, or start an engineered enquiry?
- What evidence would make a cautious project engineer forward this site internally without an explanatory email?
- What would the homepage look like if organized around a specifier's decision rather than around generic corporate sections?
- How could filament winding, pipe cross-sections, joint systems, and testing become a visual grammar that could belong only to ADPF?
