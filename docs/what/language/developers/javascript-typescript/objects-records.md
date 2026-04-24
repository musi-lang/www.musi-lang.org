---
title: "Objects, Records, and Field Updates"
description: "Read Objects, Records, and Field Updates as a guide for TypeScript readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 4
slug: "objects-records"
summary: "Start from TypeScript habits, then use the Musi Book for the full rule."
---

TypeScript structural objects make form feel lightweight. Musi keeps that benefit, but record form does not also imply methods, prototype behavior, or package identity.

{{compare:javascript-typescript-objects-records}}

## Reading Objects, Records, and Field Updates from JavaScript/TypeScript

In Musi, records and data variants describe stored data. Behavior belongs in functions or shapes and given values, not inside an object by default. For a TypeScript reader, the key topic is objects, records, and field updates.

## Common mistake

Do not treat shape as stored object data from JavaScript and TypeScript while reading objects, records, and field updates. Start with records or variants for data. In JavaScript and TypeScript, this appears often in objects, records, and field updates.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Records](/learn/book/data/records)
- [Shapes](/learn/book/abstractions/shapes)
- [Patterns](/learn/book/data/patterns)
