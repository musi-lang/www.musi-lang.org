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

In Musi, foreign named parts use `foreign "c" let ...` or a parenthesized foreign group, and unsafe calls stay inside `unsafe { ... }`. For a C++ reader, the key topic is unsafe, ffi, and native edges.

## Common mistake

Do not invent a C-like foreign block or spread unsafe assumptions through normal Musi code. For C++, common mistake: turning every Musi value into a class-heavy design. Musi `class` is closer to a concept or trait than a C++ class. Records and data store data. Instances give behavior.

## When this pays off

Use this pattern when a clock, driver, C library, host VM, or platform handle must cross into Musi. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
- [Foreign](/learn/book/advanced/foreign)
- [Runtime](/learn/book/effects-runtime/runtime)
