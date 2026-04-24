---
title: "Unsafe, Interop, and FFI"
description: "Read Unsafe, Interop, and FFI as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 14
slug: "unsafe-interop-ffi"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar C# and CLR habits. It shows how Musi handles native and unsafe edges.

{{compare:csharp-unsafe-interop-ffi}}

## Reading Unsafe, Interop, and FFI from C#

In Musi, native named parts use `native "c" let ...` or a parenthesized native group, and unsafe calls stay inside `unsafe { ... }`. For a C# reader, the key topic is unsafe, interop, and ffi.

## Common mistake

Do not invent a C-like native block or spread unsafe assumptions through normal Musi code. In C#, this appears often in unsafe, interop, and ffi.

## When this pays off

Use this pattern when a clock, driver, C library, host VM, or platform handle must cross into Musi. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
- [Native](/learn/book/advanced/native)
- [Runtime](/learn/book/effects-runtime/runtime)
