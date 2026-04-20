---
title: "Headers, Modules, and Packages"
description: "Read Headers, Modules, and Packages as a guide for C readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C Developers"
order: 12
slug: "headers-modules-packages"
summary: "Start from C habits, then use the Musi Book for the full rule."
---

A C header announces names but does not own runtime meaning by itself. Musi imports name the module value directly, so the use site shows which package owns `option`, `runtime`, or `text`.

{{compare:c99-headers-modules-packages}}

## Reading Headers, Modules, and Packages from C99

In Musi, imports bring named module values into scope, so package edges stay visible where code uses them. For a C reader, the key topic is headers, modules, and packages.

## Common mistake

Do not rebuild an old global namespace, header include pile, or barrel file when one import names the owner. In C, this appears often in headers, modules, and packages.

## When this pays off

Use modules when billing, routing, text, option, runtime, or encoding code has an owner worth naming. The C99 habit still helps here: Keep the C habit of asking where memory, symbols, and failures come from.

## Keep close

- [Imports and exports](/learn/book/organization/imports-and-exports)
- [Packages](/learn/book/organization/packages)
- [Foreign](/learn/book/advanced/foreign)
