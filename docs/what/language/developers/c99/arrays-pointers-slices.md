---
title: "Arrays, Pointers, and Slices"
description: "Read Arrays, Pointers, and Slices as a guide for C readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C Developers"
order: 6
slug: "arrays-pointers-slices"
summary: "Start from C habits, then use the Musi Book for the full rule."
---

C arrays decay, pointer arithmetic hides bounds, and slices are often a convention. Musi examples keep the collection value and indexed access visible instead of relying on caller discipline.

{{compare:c99-arrays-pointers-slices}}

## Reading Arrays, Pointers, and Slices from C99

In Musi, collection examples keep indexing, field access, and pipelines clear so a reader can see where each value comes from. For a C reader, the key topic is arrays, pointers, and slices.

## Common mistake

Do not import lazy iterators, stream chains, table conventions, or pointer arithmetic unless the Musi example needs that behavior. For C, common mistake: treating convention as a contract. Musi `class` is not a C struct with function pointers; records and data hold data, classes name behavior a type can provide.

## When this pays off

Use this pattern for prices, stops, animals, files, and other small batches where each step has a name. The C99 habit still helps here: Keep the C habit of asking where memory, symbols, and failures come from.

## Keep close

- [Arrays and slices](/learn/book/data/arrays-and-slices)
- [Records](/learn/book/data/records)
- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
