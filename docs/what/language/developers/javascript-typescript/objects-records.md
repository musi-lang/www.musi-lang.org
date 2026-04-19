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

In Musi, records and data variants describe stored data. Behavior belongs in functions or classes/instances, not inside an object by default. For a TypeScript reader, the key topic is objects, records, and field updates.

## Common mistake

Do not read `class` as object data. If the page is about a pet, invoice, room, or vehicle, start with fields or variants. For TypeScript, common mistake: assuming runtime object data and compile-time behavior are the same thing. Musi `class` is not a JavaScript constructor or TypeScript class. It is behavior kept separate from records and data.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Records](/learn/book/data/records)
- [Classes](/learn/book/abstractions/classes)
- [Patterns](/learn/book/data/patterns)
