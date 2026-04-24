---
title: "Packages, Imports, and Exports"
description: "Read Packages, Imports, and Exports as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 13
slug: "packages-imports-exports"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

For a Go reader, this guide starts from familiar habits. It shows how Musi handles module and package edges.

{{compare:go-packages-imports-exports}}

## Reading Packages, Imports, and Exports from Go

In Musi, imports bring named module values into scope, so package edges stay visible where code uses them. For a Go reader, the key topic is packages, imports, and exports.

## Common mistake

Do not rebuild an old global namespace, header include pile, or barrel file when one import names the owner. In Go, this appears often in packages, imports, and exports.

## When this pays off

Use modules when billing, routing, text, option, runtime, or encoding code has an owner worth naming. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Imports and exports](/learn/book/organization/imports-and-exports)
- [Packages](/learn/book/organization/packages)
- [Native](/learn/book/advanced/native)
