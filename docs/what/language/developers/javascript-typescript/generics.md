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

In Musi, shapes name behavior a type can provide, given values provide it, and laws document promises callers rely on. For a TypeScript reader, the key topic is generics and type parameters.

## Common mistake

Do not confuse a Musi shape with stored object state, inheritance, or a metatable. Data and behavior are separate. In JavaScript and TypeScript, this appears often in generics and type parameters.

## When this pays off

Use shapes when many types share an operation such as compare, show, step, encode, or measure. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Generics](/learn/book/types/generics)
- [Shapes](/learn/book/abstractions/shapes)
- [Laws](/learn/book/abstractions/laws)
