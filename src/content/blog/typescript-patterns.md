---
layout: ../../layouts/BlogLayout.astro
title: Advanced TypeScript Design Patterns
date: 2024-01-25
description: Exploring powerful TypeScript patterns for better type safety and code organization
tags: ['typescript', 'patterns', 'javascript', 'development']
---

# Advanced TypeScript Design Patterns

TypeScript brings powerful type safety to JavaScript. Let's explore some advanced patterns that can make your code more robust and maintainable.

<div class="callout">
<div class="callout-title">🎯 What You'll Learn</div>
<ul>
  <li>Discriminated Unions for type-safe state handling</li>
  <li>Generic Constraints for flexible yet type-safe functions</li>
  <li>Utility Types for type transformations</li>
  <li>Type Guards for runtime type checking</li>
</ul>
</div>

## Discriminated Unions

Discriminated unions are perfect for handling different states in your application:

```typescript
type LoadingState = {
  status: 'loading';
};

type SuccessState = {
  status: 'success';
  data: string[];
};

type ErrorState = {
  status: 'error';
  error: Error;
};

type State = LoadingState | SuccessState | ErrorState;

function handleState(state: State) {
  switch (state.status) {
    case 'loading':
      return <LoadingSpinner />;
    case 'success':
      return <DataList items={state.data} />;
    case 'error':
      return <ErrorMessage error={state.error} />;
  }
}
```

<div class="callout">
<div class="callout-title">💡 Pro Tip</div>
<p>Using discriminated unions with switch statements provides exhaustive type checking, ensuring you handle all possible states.</p>
</div>

## Generic Constraints

Generic constraints allow you to create flexible yet type-safe functions:

```typescript
interface HasId {
  id: number;
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

// Usage
interface User extends HasId {
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' }
];

const user = findById(users, 1); // Type is User | undefined
```

<div class="callout">
<div class="callout-title">⚠️ Watch Out</div>
<p>When using generic constraints, make sure your constraints are as specific as needed but not more restrictive than necessary.</p>
</div>

## Utility Types

TypeScript provides built-in utility types for common type transformations:

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Make all properties optional
type PartialTodo = Partial<Todo>;

// Make all properties required
type RequiredTodo = Required<Todo>;

// Make all properties readonly
type ReadonlyTodo = Readonly<Todo>;

// Pick specific properties
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// Exclude specific properties
type TodoMetadata = Omit<Todo, 'completed'>;
```

<div class="callout">
<div class="callout-title">🔍 Deep Dive</div>
<p>Utility types can be combined to create complex type transformations. For example: <code>Readonly<Partial<Todo>></code></p>
</div>

## Type Guards

Type guards help you narrow down types at runtime:

```typescript
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function isHorse(animal: Animal): animal is Horse {
  return animal.type === 'horse';
}

function getSpeed(animal: Animal) {
  if (isHorse(animal)) {
    return animal.runningSpeed; // TypeScript knows this is Horse
  }
  return animal.flyingSpeed; // TypeScript knows this is Bird
}
```

## Summary

These TypeScript patterns help you write more maintainable and type-safe code. They provide compile-time safety while keeping your code flexible and expressive.

<div class="callout">
<div class="callout-title">📚 Further Reading</div>
<ul>
  <li><a href="https://www.typescriptlang.org/docs/handbook/2/types-from-types.html">Advanced Types in TypeScript</a></li>
  <li><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html">Utility Types</a></li>
  <li><a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html">Type Narrowing</a></li>
</ul>
</div>

<div class="blog-tags">
  <a href="#" class="blog-tag">typescript</a>
  <a href="#" class="blog-tag">patterns</a>
  <a href="#" class="blog-tag">javascript</a>
  <a href="#" class="blog-tag">development</a>
</div>
