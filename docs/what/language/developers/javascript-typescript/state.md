---
title: "`let`, `const`, and Mutable State"
description: "Read `let`, `const`, and Mutable State as a guide for TypeScript readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 3
slug: "state"
summary: "Start from TypeScript habits, then use the Musi Book for the full rule."
---

For a TypeScript reader, this guide starts from familiar habits. It shows how Musi handles fresh values and mutation.

{{compare:javascript-typescript-state}}

## Reading `let`, `const`, and Mutable State from JavaScript/TypeScript

Musi makes mutation clear with `mut` and assignment; normal `let` names read as stable facts. For a TypeScript reader, the key topic is `let`, `const`, and mutable state.

## Common mistake

Do not force mutation habits from JavaScript and TypeScript into `let`, `const`, and mutable state. In Musi, a fresh name is often the clearer step. In JavaScript and TypeScript, this appears often in `let`, `const`, and mutable state.

## When this pays off

Use mutation when the app state really changes over time, such as queue depth or a buffer cursor. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Mutation](/learn/book/start/mutation)
- [Values and let](/learn/book/start/values-and-let)
- [Blocks and expressions](/learn/book/start/blocks-and-expressions)
