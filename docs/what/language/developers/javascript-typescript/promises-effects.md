---
title: "Promises, Async, and I/O Edges"
description: "Read Promises, Async, and I/O Edges as a guide for TypeScript readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 9
slug: "promises-effects"
summary: "Start from TypeScript habits, then use the Musi Book for the full rule."
---

Promises make time and outside work composable in TypeScript. Musi uses effects to name the outside request first, then lets handlers or runtime code decide how it runs.

{{compare:javascript-typescript-promises-effects}}

## Reading Promises, Async, and I/O Edges from JavaScript/TypeScript

Musi names outside work with effects and `request`, instead of hiding time, files, console work, or services inside a normal call. For a TypeScript reader, the key topic is promises, async, and i/o edges.

## Common mistake

Do not make an effect look pure. A clock, process, network service, or console changes the trust edge. For TypeScript, common mistake: assuming runtime object data and compile-time behavior are the same thing. Musi `class` is not a JavaScript constructor or TypeScript class. It is behavior kept separate from records and data.

## When this pays off

Use effects when the program asks the runtime, OS, user, or another service for an answer. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Using](/learn/book/effects-runtime/using)
- [Handlers](/learn/book/effects-runtime/handlers)
