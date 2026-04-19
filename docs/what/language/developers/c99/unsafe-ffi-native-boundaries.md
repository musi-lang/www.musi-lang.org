---
title: "Unsafe, FFI, and Native Edges"
description: "Read Unsafe, FFI, and Native Edges as a guide for C readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C Developers"
order: 14
slug: "unsafe-ffi-native-boundaries"
summary: "Start from C habits, then use the Musi Book for the full rule."
---

For C readers this page is not about whether native calls exist; it is about shrinking them. Declare the symbol, call it only under `unsafe`, then return to normal Musi values.

{{compare:c99-unsafe-ffi-native-boundaries}}

## Reading Unsafe, FFI, and Native Edges from C99

In Musi, foreign named parts use `foreign "c" let ...` or a parenthesized foreign group, and unsafe calls stay inside `unsafe { ... }`. For a C reader, the key topic is unsafe, ffi, and native edges.

## Common mistake

Do not invent a C-like foreign block or spread unsafe assumptions through normal Musi code. For C, common mistake: treating convention as a contract. Musi `class` is not a C struct with function pointers; records and data hold data, classes name behavior a type can provide.

## When this pays off

Use this pattern when a clock, driver, C library, host VM, or platform handle must cross into Musi. The C99 habit still helps here: Keep the C habit of asking where memory, symbols, and failures come from.

## Keep close

- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
- [Foreign](/learn/book/advanced/foreign)
- [Runtime](/learn/book/effects-runtime/runtime)
