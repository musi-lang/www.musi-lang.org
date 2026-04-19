---
title: "Generics and Type Parameters"
description: "Read Generics and Type Parameters as a guide for TypeScript readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 8
slug: "generics"
summary: "Start from TypeScript habits, then use the Musi Book for the full rule."
---

For a TypeScript reader, this guide starts from familiar habits. It shows how Musi handles generic behaviors.

{{compare:javascript-typescript-generics}}

## Reading Generics and Type Parameters from JavaScript/TypeScript

In Musi, classes name behavior a type can provide, instances provide it, and laws document promises callers rely on. For a TypeScript reader, the key topic is generics and type parameters.

## Common mistake

Do not confuse a Musi class with stored object state, inheritance, or a metatable. Data and behavior are separate. For TypeScript, common mistake: assuming runtime object data and compile-time behavior are the same thing. Musi `class` is not a JavaScript constructor or TypeScript class. It is behavior kept separate from records and data.

## When this pays off

Use classes when many types share an operation such as compare, show, step, encode, or measure. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Generics](/learn/book/types/generics)
- [Classes](/learn/book/abstractions/classes)
- [Laws](/learn/book/abstractions/laws)
