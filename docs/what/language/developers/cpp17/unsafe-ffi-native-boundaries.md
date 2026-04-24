---
title: "Unsafe, FFI, and Native Edges"
description: "Read Unsafe, FFI, and Native Edges as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 14
slug: "unsafe-ffi-native-boundaries"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

For a C++ reader, this guide starts from familiar habits. It shows how Musi handles native and unsafe edges.

{{compare:cpp17-unsafe-ffi-native-boundaries}}

## Reading Unsafe, FFI, and Native Edges from C++17

In Musi, native named parts use `native "c" let ...` or a parenthesized native group, and unsafe calls stay inside `unsafe { ... }`. For a C++ reader, the key topic is unsafe, ffi, and native edges.

## Common mistake

Do not invent a C-like native block or spread unsafe assumptions through normal Musi code. In C++, this appears often in unsafe, ffi, and native edges.

## When this pays off

Use this pattern when a clock, driver, C library, host VM, or platform handle must cross into Musi. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
- [Native](/learn/book/advanced/native)
- [Runtime](/learn/book/effects-runtime/runtime)
