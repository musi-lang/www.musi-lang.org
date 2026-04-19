---
title: "Musi Book"
description: "Learn Musi through a chaptered guide that starts with simple expressions and climbs toward data, types, effects, and tools."
group: "Language"
section: "Language"
order: 0
slug: "language"
summary: "A public Musi guide that starts small, explains syntax, and keeps building toward real programs."
---

Musi Book teaches the language in the order readers need: run a small file, name values, combine expressions, model data, organize packages, then add types, abstractions, effects, and native edges.

The guide assumes many readers come from C-family languages, Python, JavaScript, TypeScript, or Rust. It does not assume ML-family language experience. When Musi uses a functional idea, the page names the practical reason first, then shows syntax.

## Reading Path

Start with the first file and keep moving forward. Later chapters revisit the same ideas with more detail, like a spiral staircase: a block is first a way to group steps, then later becomes the basis for match arms, handlers, unsafe scopes, and generated syntax.

Use code examples as the main guide for how examples should look. Every Musi example shown through a snippet is kept in the website registry so syntax highlighting and old syntax checks run in one place.

## How Musi code reads

Musi code reads as values flowing through expressions. A `let` introduces a name. A block produces its last expression. A `match` chooses by data form. Effects make outside work visible through `request` and handlers. Unsafe native work stays in `unsafe { ... }`.

This means Musi has no normal `return` keyword, no base loop form, no hidden effect marker, and no pointer mark model in user code. The language favors named forms where the operation would otherwise be easy to miss.

## What You Will Learn

- Read one Musi file from top to bottom.
- Use bindings, blocks, functions, lambdas, and methods.
- Model data with records, arrays, variants, payloads, and patterns.
- Use annotations, inference, generics, callable types, and dependent-style parameters.
- Describe behavior with classes, instances, and laws.
- Keep capabilities visible with effects and handlers.
- Keep raw native work small with attributes, foreign named parts, unsafe blocks, and FFI.

Continue to [Getting Started](/learn/book/start/foundations/getting-started).
