

# GLOFeagles '26 – Hackathon Landing Page

## Overview
A modern, single-page scrolling website for the GLOFeagles '26 challenge at NCVPRIPG 2026. CSS parallax layers with an illustrated SVG skater that moves along a path as the user scrolls, revealing sections in a narrative flow.

## Visual Design
- **Color scheme:** Deep blue (#0A2540), cyan accents (#00BFFF), whites, subtle orange for warnings
- **Parallax layers:** Snow-capped mountains, frozen lake surface, ice cracks, mist — all CSS-driven
- **SVG skater:** Stylized figure skater with ice trail, animates forward on scroll
- **Typography:** Clean, modern sans-serif; large bold headings

## Page Sections (scroll order)

### 1. Hero Section
- Full-screen parallax glacial landscape (layered CSS backgrounds)
- SVG skater centered on ice surface
- Title overlay: "GLOFeagles '26 – Automated Detection of Glacial Lakes from Multi-Temporal Satellite Imagery"
- Subtitle: "CV Hackathon @ NCVPRIPG 2026 · July 22-24 · LNMIIT Jaipur"
- "Register Now" button → Google Form link
- Team credit: Shiv Nadar University Chennai

### 2. The Problem Statement (Challenge Overview)
- Full abstract text provided by user
- Highlight SDG 9, 11, 13 as badges
- Bullet: Dataset – Sentinel-2 via IEEE DataPort

### 3. Task Details
- Detect glacial lakes using image processing, spectral indices, terrain analysis, deep learning
- Distinguish from snow/ice/debris/shadows; minimize false alarms
- Performance evaluation & uncertainty for GLOF risk mapping

### 4. Important Dates (Timeline)
- Styled as checkpoints along the skater's ice path
- Six dates as milestone markers on a visual path:
  - March 10: Website Launch
  - March 20: Dataset Release
  - April 1: Submissions Open
  - June 5: Submissions Close
  - June 20: Results Announced
  - June 20 – July 5: Conference Registration

### 5. Rules & Submissions
- Max 4 members, designate lead
- Submit Python code (commented), approach summary, demo script
- Include inference time & system specs
- Fair play enforced

### 6. Prizes & Sponsors
- Winner ₹10,000 / 1st Runner ₹7,000 / 2nd Runner ₹5,000
- Collaboration on paper, e-certificates
- Sponsor logos placeholder (BAI Petro, others TBD)

### 7. Footer
- Contact info, NCVPRIPG 2026 links, social icons
- Repeat "Register Now" button

## Technical Approach
- Scroll-driven animations using CSS `IntersectionObserver` + CSS transforms/transitions
- SVG skater with keyframe animation tied to scroll position via a lightweight JS scroll listener
- Parallax mountain/ice layers using CSS `background-attachment: fixed` and transform translations
- Fully responsive (mobile: simplified parallax, stacked layout)
- All on a single Index page with smooth scroll navigation

