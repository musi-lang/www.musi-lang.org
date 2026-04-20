---
title: "Unsafe, Cgo, and FFI"
description: "Read Unsafe, Cgo, and FFI as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 15
slug: "unsafe-cgo-ffi"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

For a Go reader, this guide starts from familiar habits. It shows how Musi handles native and unsafe edges.

{{compare:go-unsafe-cgo-ffi}}

## Reading Unsafe, Cgo, and FFI from Go

In Musi, foreign named parts use `foreign "c" let ...` or a parenthesized foreign group, and unsafe calls stay inside `unsafe { ... }`. For a Go reader, the key topic is unsafe, cgo, and ffi.

## Common mistake

Do not invent a C-like foreign block or spread unsafe assumptions through normal Musi code. In Go, this appears often in unsafe, cgo, and ffi.

## When this pays off

Use this pattern when a clock, driver, C library, host VM, or platform handle must cross into Musi. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
- [Foreign](/learn/book/advanced/foreign)
- [Runtime](/learn/book/effects-runtime/runtime)
