---
title: Modern CSS Layout Techniques
date: 2024-01-30
description: A comprehensive guide to modern CSS layout techniques using Grid and Flexbox
tags: ['css', 'layout', 'flexbox', 'grid', 'frontend']
---

Modern CSS provides powerful tools for creating flexible and responsive layouts. Let's explore how to use CSS Grid and Flexbox effectively.

<div class="callout">
<div class="callout-title">🎯 In This Guide</div>
<ul>
  <li>Master CSS Grid for two-dimensional layouts</li>
  <li>Learn Flexbox for one-dimensional layouts</li>
  <li>Understand responsive design patterns</li>
  <li>Explore common layout solutions</li>
</ul>
</div>

## CSS Grid Layout

CSS Grid is perfect for creating two-dimensional layouts:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.grid-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Complex Grid Layout */
.dashboard {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

<div class="callout">
<div class="callout-title">💡 Pro Tip</div>
<p>Use <code>grid-template-areas</code> for complex layouts - it provides a visual representation of your layout structure.</p>
</div>

## Flexbox Layout

Flexbox is ideal for one-dimensional layouts:

```css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.flex-item {
  flex: 1 1 300px;
  min-width: 0; /* Prevents flex items from overflowing */
}

/* Card Layout Example */
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  flex: 1;
}

.card-footer {
  margin-top: auto; /* Pushes footer to bottom */
}
```

<div class="callout">
<div class="callout-title">⚠️ Common Pitfall</div>
<p>Remember to use <code>flex-wrap: wrap</code> for responsive layouts, and always test with different screen sizes.</p>
</div>

## Responsive Design Patterns

Modern layouts should work across all screen sizes:

```css
/* Mobile-first approach */
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Responsive Navigation */
.nav {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

<div class="callout">
<div class="callout-title">🔍 Best Practice</div>
<p>Always design mobile-first and use media queries to enhance the layout for larger screens.</p>
</div>

## Common Layout Solutions

Here are some frequently used layout patterns:

### Holy Grail Layout

```css
.holy-grail {
  display: grid;
  grid-template:
    "header" auto
    "nav" auto
    "main" 1fr
    "aside" auto
    "footer" auto
    / 1fr;
}

@media (min-width: 768px) {
  .holy-grail {
    grid-template:
      "header header" auto
      "nav main" 1fr
      "nav aside" auto
      "footer footer" auto
      / 12rem 1fr;
  }
}
```

### Card Grid

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

## Summary

Modern CSS layout techniques give us powerful tools for creating flexible, maintainable layouts. The key is choosing the right tool for the job:
- Use Grid for two-dimensional layouts
- Use Flexbox for one-dimensional layouts
- Combine both for complex UI components

<div class="callout">
<div class="callout-title">📚 Further Reading</div>
<ul>
  <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/">Complete Guide to Grid</a></li>
  <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Complete Guide to Flexbox</a></li>
  <li><a href="https://web.dev/responsive-web-design-basics/">Responsive Design Basics</a></li>
</ul>
</div>

<div class="blog-tags">
  <a href="#" class="blog-tag">css</a>
  <a href="#" class="blog-tag">layout</a>
  <a href="#" class="blog-tag">flexbox</a>
  <a href="#" class="blog-tag">grid</a>
  <a href="#" class="blog-tag">frontend</a>
</div>
