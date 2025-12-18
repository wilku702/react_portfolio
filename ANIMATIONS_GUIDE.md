# Portfolio Animations & Visual Enhancements Guide

This guide documents all the visual enhancements and smooth interactions implemented in your React portfolio.

## Table of Contents

- [Visual Enhancements](#visual-enhancements)
- [Animation Components](#animation-components)
- [Custom Hooks](#custom-hooks)
- [Utility Functions](#utility-functions)
- [Usage Examples](#usage-examples)

---

## Visual Enhancements

### 1. Gradient Backgrounds

**Animated Gradient Mesh**
- Location: [src/components/AnimatedBackground/AnimatedBackground.js](src/components/AnimatedBackground/AnimatedBackground.js)
- Features: Floating orbs with animated gradients
- Usage: Already integrated in [App.js](src/App.js:60)

**Gradient Text**
- Classnames available in [src/assets/styles/index.css](src/assets/styles/index.css):
  - `.gradient-text` - Static purple gradient
  - `.gradient-text-animated` - Animated shifting gradient
  - `.gradient-text-main` - Main theme color gradient

```jsx
<h1 className="gradient-text-main">Your Title</h1>
```

### 2. Glassmorphism & Frosted Glass

**CSS Classes** (in [index.css](src/assets/styles/index.css:66-94)):
- `.glass-card` - Light glassmorphism effect
- `.glass-card-dark` - Dark glassmorphism with main color border
- `.glass-button` - Glass button with hover effects

```jsx
<div className="glass-card p-6 rounded-2xl">
  <h2>Card Content</h2>
</div>
```

### 3. Neumorphism

**CSS Classes** (in [index.css](src/assets/styles/index.css:96-127)):
- `.neuro-card` - Raised neumorphic card
- `.neuro-card-inset` - Inset neumorphic card
- `.neuro-button` - Neumorphic button with active states

```jsx
<button className="neuro-button px-6 py-3">
  Click Me
</button>
```

### 4. Color-Coded Sections

New accent colors added to Tailwind config:
- `accent-purple`: #9333ea
- `accent-blue`: #3b82f6
- `accent-cyan`: #06b6d4
- `accent-pink`: #ec4899
- `accent-orange`: #f97316

---

## Animation Components

### Interactive Buttons

Location: [src/components/InteractiveElements/AnimatedButton.js](src/components/InteractiveElements/AnimatedButton.js)

**MagneticButton** - Spring animation on hover/tap
```jsx
import { MagneticButton } from './components/InteractiveElements/AnimatedButton';

<MagneticButton onClick={() => {}} className="bg-main">
  Click Me
</MagneticButton>
```

**GlassButton** - Glass effect with lift animation
```jsx
import { GlassButton } from './components/InteractiveElements/AnimatedButton';

<GlassButton onClick={() => {}}>
  Glass Button
</GlassButton>
```

**NeuroButton** - Neumorphic button
**ShimmerButton** - Button with shimmer effect on hover

### Interactive Cards

Location: [src/components/InteractiveElements/AnimatedCard.js](src/components/InteractiveElements/AnimatedCard.js)

**LiftCard** - Lifts up on hover
```jsx
import { LiftCard } from './components/InteractiveElements/AnimatedCard';

<LiftCard className="p-6 bg-background rounded-xl">
  <h3>Card Content</h3>
</LiftCard>
```

**TiltCard** - 3D tilt effect (uses react-parallax-tilt)
```jsx
import { TiltCard } from './components/InteractiveElements/AnimatedCard';

<TiltCard className="p-6 bg-background rounded-xl">
  <h3>Card Content</h3>
</TiltCard>
```

**GradientBorderCard** - Border follows cursor
**GlassCard** - Glassmorphism card with hover lift
**ExpandableCard** - Expands to show more content
**ImageZoomCard** - Image zooms on hover

### Text Animations

Location: [src/components/TextAnimations/RevealText.js](src/components/TextAnimations/RevealText.js)

**RevealText** - Letter-by-letter reveal
```jsx
import { RevealText } from './components/TextAnimations/RevealText';

<RevealText text="Hello World" delay={0.5} className="text-4xl" />
```

**GradientText** - Gradient text with hover scale
```jsx
import { GradientText } from './components/TextAnimations/RevealText';

<GradientText animated={true}>Gradient Text</GradientText>
```

**UnderlineText** - Animated underline on hover
```jsx
import { UnderlineText } from './components/TextAnimations/RevealText';

<UnderlineText>Hover me</UnderlineText>
```

**CountingNumber** - Number counting animation
```jsx
import { CountingNumber } from './components/TextAnimations/RevealText';

<CountingNumber end={100} duration={2} suffix="+" />
```

### Scroll Progress Indicators

Location: [src/components/InteractiveElements/ScrollProgress.js](src/components/InteractiveElements/ScrollProgress.js)

**ScrollProgress** - Linear progress bar (already in App.js)
```jsx
import { ScrollProgress } from './components/InteractiveElements/ScrollProgress';

<ScrollProgress />
```

**CircularScrollProgress** - Circular progress indicator
```jsx
import { CircularScrollProgress } from './components/InteractiveElements/ScrollProgress';

<CircularScrollProgress size={60} strokeWidth={4} />
```

**SectionScrollIndicator** - Section-based navigation dots
```jsx
import { SectionScrollIndicator } from './components/InteractiveElements/ScrollProgress';

const sections = [
  { id: 'home', label: 'Home', color: '#94aef7' },
  { id: 'about', label: 'About', color: '#9333ea' },
  { id: 'projects', label: 'Projects', color: '#06b6d4' }
];

<SectionScrollIndicator sections={sections} />
```

---

## Custom Hooks

Location: [src/hooks/useScrollAnimation.js](src/hooks/useScrollAnimation.js)

### useScrollAnimation

Intersection Observer-based scroll animations
```jsx
import { useScrollAnimation } from './hooks/useScrollAnimation';

function MyComponent() {
  const { ref, inView } = useScrollAnimation({
    threshold: 0.5,
    once: true
  });

  return (
    <div ref={ref} className={inView ? 'animate-fade-in' : ''}>
      Content
    </div>
  );
}
```

### useScrollProgress

Get scroll progress (0 to 1)
```jsx
import { useScrollProgress } from './hooks/useScrollAnimation';

function MyComponent() {
  const scrollProgress = useScrollProgress();

  return <div>Scrolled: {Math.round(scrollProgress * 100)}%</div>;
}
```

### useParallax

Parallax scrolling effect
```jsx
import { useParallax } from './hooks/useScrollAnimation';

function MyComponent() {
  const offset = useParallax(0.5); // 0.5 = speed multiplier

  return (
    <div style={{ transform: `translateY(${offset}px)` }}>
      Parallax Content
    </div>
  );
}
```

---

## Utility Functions

### View Transitions API

Location: [src/utils/viewTransitions.js](src/utils/viewTransitions.js)

**navigateWithTransition** - Smooth page transitions (already implemented in ArticleLinks)
```jsx
import { navigateWithTransition } from './utils/viewTransitions';
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigateWithTransition(navigate, '/about', 'forward');
  };

  return <button onClick={handleClick}>Go to About</button>;
}
```

**executeViewTransition** - Execute custom view transition
```jsx
import { executeViewTransition } from './utils/viewTransitions';

executeViewTransition(async () => {
  // Your DOM updates here
  setContent('New content');
}, 'forward');
```

---

## Tailwind Custom Animations

Available in [tailwind.config.js](tailwind.config.js):

- `animate-gradient-shift` - Animated gradient background
- `animate-fade-in-up` - Fade in with upward movement
- `animate-fade-in` - Simple fade in
- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right
- `animate-scale-in` - Scale in with fade
- `animate-shimmer` - Shimmer effect
- `animate-float` - Floating animation
- `animate-pulse-slow` - Slow pulse
- `animate-draw-line` - Line drawing animation

### Usage Example
```jsx
<div className="animate-fade-in-up">
  Content fades in and moves up
</div>

<div className="bg-gradient-animated">
  Animated gradient background
</div>
```

---

## What's Already Implemented

✅ **Header Component** ([Header.js:6-69](src/components/Header/Header.js))
- Animated gradient orbs
- Gradient text on last line
- Smooth typewriter animations

✅ **ArticleLinks Component** ([ArticleLinks.js](src/components/ArticleLinks/ArticleLinks.js))
- 3D tilt effect on cards (react-parallax-tilt)
- View transitions on navigation
- Gradient overlays on hover
- Enhanced hover animations

✅ **HomeSections Component** ([HomeSections.js](src/components/HomeSections/HomeSections.js))
- Gradient text on section titles

✅ **App Component** ([App.js](src/App.js))
- Animated background component
- Scroll progress indicator
- Mouse cursor gradient effect

---

## Tips for Best Results

1. **Performance**: The animated backgrounds use GPU-accelerated transforms (x, y, scale) for smooth 60fps animations
2. **Accessibility**: All animations respect `prefers-reduced-motion` settings
3. **Browser Support**: View Transitions API requires Chrome 111+, Firefox 129+, or Safari 18+
4. **Mobile**: Tilt effects are optimized for mobile with gyroscope support
5. **Customization**: All colors can be customized in [tailwind.config.js](tailwind.config.js)

---

## Example: Creating a New Page with All Effects

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { RevealText, GradientText } from './components/TextAnimations/RevealText';
import { TiltCard } from './components/InteractiveElements/AnimatedCard';
import { MagneticButton } from './components/InteractiveElements/AnimatedButton';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function NewPage() {
  const { ref, inView } = useScrollAnimation({ once: true });

  return (
    <div className="min-h-screen p-8">
      {/* Animated Title */}
      <GradientText animated className="text-5xl font-bold mb-8">
        Welcome to My Page
      </GradientText>

      {/* Letter Reveal */}
      <RevealText
        text="This text reveals letter by letter"
        className="text-2xl mb-12"
      />

      {/* 3D Tilt Card */}
      <TiltCard className="glass-card-dark p-8 mb-8">
        <h3 className="text-2xl font-bold mb-4">Tilt Me!</h3>
        <p>Move your mouse over this card</p>
      </TiltCard>

      {/* Scroll-triggered Animation */}
      <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl mb-4">Scroll-triggered Content</h2>
      </div>

      {/* Animated Button */}
      <MagneticButton className="glass-button px-8 py-4">
        Click Me!
      </MagneticButton>
    </div>
  );
}

export default NewPage;
```

---

## 🎨 Congratulations!

Your portfolio now has professional-grade animations and visual effects! All components are modular and reusable throughout your application.

For questions or customization help, refer to the component files directly - they're well-commented and easy to modify.
