---
title: "Arrays, Pointers, and Slices"
description: "Read Arrays, Pointers, and Slices as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 6
slug: "arrays-pointers-slices"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

For a C++ reader, this guide starts from familiar habits. It shows how Musi handles lists, slices, maps, and pipelines.

{{compare:cpp17-arrays-pointers-slices}}

## Reading Arrays, Pointers, and Slices from C++17

In Musi, collection examples keep indexing, field access, and pipelines clear so a reader can see where each value comes from. For a C++ reader, the key topic is arrays, pointers, and slices.

## Common mistake

Do not import lazy iterators, stream chains, table conventions, or pointer arithmetic unless the Musi example needs that behavior. In C++, this appears often in arrays, pointers, and slices.

## When this pays off

Use this pattern for prices, stops, animals, files, and other small batches where each step has a name. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Arrays and slices](/learn/book/data/arrays-and-slices)
- [Records](/learn/book/data/records)
- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
