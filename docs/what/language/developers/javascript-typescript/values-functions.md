---
title: "Values, Functions, and Final Expressions"
description: "Read Values, Functions, and Final Expressions as a guide for TypeScript readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 2
slug: "values-functions"
summary: "Start from TypeScript habits, then use the Musi Book for the full rule."
---

For a TypeScript reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:javascript-typescript-values-functions}}

## Reading Values, Functions, and Final Expressions from JavaScript/TypeScript

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a TypeScript reader, the key topic is values, functions, and final expressions.

## Common mistake

Do not preserve call ceremony just because the source language needs it for methods, receivers, overloads, or closures. For TypeScript, common mistake: assuming runtime object data and compile-time behavior are the same thing. Musi `class` is not a JavaScript constructor or TypeScript class. It is behavior kept separate from records and data.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Values and let](/learn/book/start/values-and-let)
- [Functions](/learn/book/core/functions)
- [Calls](/learn/book/core/calls)
