---
title: "Embedding, C API, and FFI"
description: "Read Embedding, C API, and FFI as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 14
slug: "embedding-c-api-ffi"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

Embedding and C APIs are natural to Lua users. Musi keeps native edges possible, but the foreign named part and unsafe block make the edge easy to check.

{{compare:lua-embedding-c-api-ffi}}

## Reading Embedding, C API, and FFI from Lua

In Musi, foreign named parts use `foreign "c" let ...` or a parenthesized foreign group, and unsafe calls stay inside `unsafe { ... }`. For a Lua reader, the key topic is embedding, c api, and ffi.

## Common mistake

Do not invent a C-like foreign block or spread unsafe assumptions through normal Musi code. In Lua, this appears often in embedding, c api, and ffi.

## When this pays off

Use this pattern when a clock, driver, C library, host VM, or platform handle must cross into Musi. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Unsafe and FFI](/learn/book/advanced/unsafe-and-ffi)
- [Foreign](/learn/book/advanced/foreign)
- [Runtime](/learn/book/effects-runtime/runtime)
