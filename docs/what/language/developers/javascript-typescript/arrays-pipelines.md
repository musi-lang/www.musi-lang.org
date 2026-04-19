---
title: "Arrays and Data Pipelines"
description: "Read Arrays and Data Pipelines as a guide for TypeScript readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 5
slug: "arrays-pipelines"
summary: "Start from TypeScript habits, then use the Musi Book for the full rule."
---

For a TypeScript reader, this guide starts from familiar habits. It shows how Musi handles lists, slices, maps, and pipelines.

{{compare:javascript-typescript-arrays-pipelines}}

## Reading Arrays and Data Pipelines from JavaScript/TypeScript

In Musi, collection examples keep indexing, field access, and pipelines clear so a reader can see where each value comes from. For a TypeScript reader, the key topic is arrays and data pipelines.

## Common mistake

Do not import lazy iterators, stream chains, table conventions, or pointer arithmetic unless the Musi example needs that behavior. For TypeScript, common mistake: assuming runtime object data and compile-time behavior are the same thing. Musi `class` is not a JavaScript constructor or TypeScript class. It is behavior kept separate from records and data.

## When this pays off

Use this pattern for prices, stops, animals, files, and other small batches where each step has a name. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Arrays and slices](/learn/book/data/arrays-and-slices)
- [Records](/learn/book/data/records)
- [Dot calls](/learn/book/core/dot-calls)
