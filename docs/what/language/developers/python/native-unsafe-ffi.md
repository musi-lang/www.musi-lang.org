---
title: "Native Edges, Unsafe, and FFI"
description: "Read Native Edges, Unsafe, and FFI as a guide for Python readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Python Developers"
order: 13
slug: "native-unsafe-ffi"
summary: "Start from Python habits, then use the Musi Book for the full rule."
---

For a Python reader, this guide starts from familiar habits. It shows how Musi handles native and unsafe edges.

{{compare:python-native-unsafe-ffi}}

## Reading Native Edges, Unsafe, and FFI from Python

In Musi, foreign named parts use `foreign "c" let ...` or a parenthesized foreign group, and unsafe calls stay inside `unsafe { ... }`. For a Python reader, the key topic is native edges, unsafe, and ffi.

## Common mistake

Do not invent a C-like foreign block or spread unsafe assumptions through normal Musi code. In Python, this appears often in native edges, unsafe, and ffi.

## When this pays off

Use this pattern when a clock, driver, C library, host VM, or platform handle must cross into Musi. The Python habit still helps here: Keep the Python habit of naming the real-world thing first.

## Keep close

- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
- [Foreign](/learn/book/advanced/foreign)
- [Runtime](/learn/book/effects-runtime/runtime)
