---
title: "Overview"
description: "Map TypeScript 5.9 / modern JavaScript habits to the Musi Book without repeating every construct example."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 1
slug: "overview"
summary: "Use this guide when JavaScript and TypeScript habits make Musi feel surprising."
---

TypeScript sits on JavaScript objects, modules, promises, undefined, structural typing, and a huge package culture. Musi keeps the useful habit of making data visible, but is less willing to let missing values, promises, or object methods carry hidden meaning. Data, records, classes, instances, and effects each have separate jobs.

Use this as a translation guide for JavaScript/TypeScript code. Start with the familiar habit, then ask which Musi construct owns the same promise. A page is successful when it tells you which old habit to keep and which old shortcut to drop.

## Start from the habit that hurts

- [Values, Functions, and Final Expressions](/learn/guides/javascript-typescript/values-functions) - values habits get translated once, then the Musi Book owns the details.
- [`let`, `const`, and Mutable State](/learn/guides/javascript-typescript/state) - mutation habits get translated once, then the Musi Book owns the details.
- [Objects, Records, and Field Updates](/learn/guides/javascript-typescript/objects-records) - records habits get translated once, then the Musi Book owns the details.
- [Arrays and Data Pipelines](/learn/guides/javascript-typescript/arrays-pipelines) - arrays habits get translated once, then the Musi Book owns the details.
- [Null, Undefined, Option, and Result](/learn/guides/javascript-typescript/null-result) - absence and failure stop being hidden paths.
- [Unions, Variants, and Pattern Matching](/learn/guides/javascript-typescript/unions-variants) - patterns habits get translated once, then the Musi Book owns the details.
- [Generics and Type Parameters](/learn/guides/javascript-typescript/generics) - generics habits get translated once, then the Musi Book owns the details.
- [Promises, Async, and I/O Edges](/learn/guides/javascript-typescript/promises-effects) - outside work becomes a named request.
- [Modules, Packages, and Imports](/learn/guides/javascript-typescript/modules-packages) - package edges replace compatibility-era habits.
- [Classes, Objects, and Shared Behavior](/learn/guides/javascript-typescript/classes-behavior) - records habits get translated once, then the Musi Book owns the details.
- [Testing and Tools](/learn/guides/javascript-typescript/testing-tooling) - testing habits get translated once, then the Musi Book owns the details.

## Habits that still help

- Keep the TypeScript habit of reading the fields before reading how it works.
- Drop the idea that any object with the right fields also explains behavior, absence, or outside work.
- Keep examples tied to normal work: receipts, routes, files, animals, people, rooms, and services.

## First common mistake

Musi `class` is not a JavaScript constructor or TypeScript class. It is behavior kept separate from records and data. If you need a person, car, invoice, or package, start with records or data. If you need any type that can compare, show, encode, or step, use a class with instances.

## When to switch to the Musi Book

Stay in this guide while a JavaScript/TypeScript habit is getting in the way. Switch to [Values and let](/learn/book/start/values-and-let), [Records](/learn/book/data/records), [Patterns](/learn/book/data/patterns), [Generics](/learn/book/types/generics), [Classes](/learn/book/abstractions/classes), and [Effects](/learn/book/effects-runtime/effects) when you need the main rule.
