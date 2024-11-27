---
title: Understanding React Hooks
date: 2024-01-20
description: A deep dive into React Hooks and their practical applications
tags: ['react', 'hooks', 'javascript', 'frontend']
---

# Understanding React Hooks

React Hooks have revolutionized how we write React components. Let's explore some common hooks and their practical applications.

<div class="callout">
<div class="callout-title">🎯 Key Takeaways</div>
<ul>
  <li>Learn about useState for state management</li>
  <li>Understand useEffect for side effects</li>
  <li>Explore custom hooks for reusable logic</li>
</ul>
</div>

## useState Hook

The most basic yet powerful hook is `useState`. Here's a practical example:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

<div class="callout">
<div class="callout-title">💡 Pro Tip</div>
<p>Always declare state variables at the top level of your component. Never use hooks inside loops or conditions.</p>
</div>

## useEffect Hook

`useEffect` is used for handling side effects in your components:

```jsx
import React, { useState, useEffect } from 'react';

function UserStatus() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline);
    };

    // Subscribe to user status
    UserAPI.subscribeToUserStatus(handleStatusChange);

    // Cleanup on unmount
    return () => {
      UserAPI.unsubscribeFromUserStatus(handleStatusChange);
    };
  }, []); // Empty dependency array means run only on mount/unmount

  return (
    <div>
      {isOnline ? '🟢 Online' : '⚫️ Offline'}
    </div>
  );
}
```

<div class="callout">
<div class="callout-title">⚠️ Common Mistake</div>
<p>Don't forget to clean up subscriptions and event listeners in your useEffect's return function to prevent memory leaks.</p>
</div>

## Creating Custom Hooks

Custom hooks allow you to extract component logic into reusable functions:

```jsx
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

## Summary

React Hooks provide a more elegant way to handle state and side effects in functional components. They help reduce code duplication and make components more maintainable.

<div class="callout">
<div class="callout-title">📚 Further Reading</div>
<ul>
  <li><a href="https://reactjs.org/docs/hooks-intro.html">Official React Hooks Documentation</a></li>
  <li><a href="https://reactjs.org/docs/hooks-rules.html">Rules of Hooks</a></li>
  <li><a href="https://reactjs.org/docs/hooks-custom.html">Building Custom Hooks</a></li>
</ul>
</div>

<div class="blog-tags">
  <a href="#" class="blog-tag">react</a>
  <a href="#" class="blog-tag">hooks</a>
  <a href="#" class="blog-tag">javascript</a>
  <a href="#" class="blog-tag">frontend</a>
</div>
