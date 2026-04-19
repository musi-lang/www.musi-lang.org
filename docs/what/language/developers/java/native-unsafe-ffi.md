---
title: "Native, Unsafe, and FFI"
description: "Read Native, Unsafe, and FFI as a guide for Java readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Java Developers"
order: 14
slug: "native-unsafe-ffi"
summary: "Start from Java habits, then use the Musi Book for the full rule."
---

For a Java reader, this guide starts from familiar habits. It shows how Musi handles native and unsafe edges.

{{compare:java-native-unsafe-ffi}}

## Reading Native, Unsafe, and FFI from Java

In Musi, foreign named parts use `foreign "c" let ...` or a parenthesized foreign group, and unsafe calls stay inside `unsafe { ... }`. For a Java reader, the key topic is native, unsafe, and ffi.

## Common mistake

Do not invent a C-like foreign block or spread unsafe assumptions through normal Musi code. For Java, common mistake: reading Musi `class` as an object type by name with constructors and fields. Musi `class` is behavior supplied by instances. Records and data model data.

## When this pays off

Use this pattern when a clock, driver, C library, host VM, or platform handle must cross into Musi. The Java habit still helps here: Keep the Java habit of naming APIs for future readers.

## Keep close

- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
- [Foreign](/learn/book/advanced/foreign)
- [Runtime](/learn/book/effects-runtime/runtime)
