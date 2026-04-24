---
title: "Unsafe and FFI"
description: "Read Unsafe and FFI as a guide for Rust readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Rust Developers"
order: 10
slug: "unsafe-ffi"
summary: "Start from Rust habits, then use the Musi Book for the full rule."
---

Rust unsafe marks code the compiler cannot fully protect. Musi uses the same warning form: declare native symbols, then keep calls inside `unsafe { ... }`.

{{compare:rust-unsafe-ffi}}

## Reading Unsafe and FFI from Rust

In Musi, native named parts use `native "c" let ...` or a parenthesized native group, and unsafe calls stay inside `unsafe { ... }`. For a Rust reader, the key topic is unsafe and ffi.

## Common mistake

Do not invent a C-like native block or spread unsafe assumptions through normal Musi code. In Rust, this appears often in unsafe and ffi.

## When this pays off

Use this pattern when a clock, driver, C library, host VM, or platform handle must cross into Musi. The Rust habit still helps here: Keep the Rust habit of asking which type carries the invariant.

## Keep close

- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
- [Native](/learn/book/advanced/native)
- [Runtime](/learn/book/effects-runtime/runtime)
