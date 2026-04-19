---
title: "Modules, Packages, and Visibility"
description: "Read Modules, Packages, and Visibility as a guide for Rust readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Rust Developers"
order: 9
slug: "modules-packages"
summary: "Start from Rust habits, then use the Musi Book for the full rule."
---

For a Rust reader, this guide starts from familiar habits. It shows how Musi handles module and package edges.

{{compare:rust-modules-packages}}

## Reading Modules, Packages, and Visibility from Rust

In Musi, imports bring named module values into scope, so package edges stay visible where code uses them. For a Rust reader, the key topic is modules, packages, and visibility.

## Common mistake

Do not rebuild an old global namespace, header include pile, or barrel file when one import names the owner. For Rust, common mistake: expecting Musi syntax to mirror Rust even when the ideas are separated differently. Musi `class` is closest to a Rust trait plus law text. Instances give behavior.

## When this pays off

Use modules when billing, routing, text, option, runtime, or encoding code has an owner worth naming. The Rust habit still helps here: Keep the Rust habit of asking which type carries the invariant.

## Keep close

- [Imports and exports](/learn/book/organization/imports-and-exports)
- [Packages](/learn/book/organization/packages)
- [Foreign](/learn/book/advanced/foreign)
