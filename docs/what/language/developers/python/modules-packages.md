---
title: "Modules and Packages"
description: "Read Modules and Packages as a guide for Python readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Python Developers"
order: 11
slug: "modules-packages"
summary: "Start from Python habits, then use the Musi Book for the full rule."
---

For a Python reader, this guide starts from familiar habits. It shows how Musi handles module and package edges.

{{compare:python-modules-packages}}

## Reading Modules and Packages from Python

In Musi, imports bring named module values into scope, so package edges stay visible where code uses them. For a Python reader, the key topic is modules and packages.

## Common mistake

Do not rebuild an old global namespace, header include pile, or barrel file when one import names the owner. In Python, this appears often in modules and packages.

## When this pays off

Use modules when billing, routing, text, option, runtime, or encoding code has an owner worth naming. The Python habit still helps here: Keep the Python habit of naming the real-world thing first.

## Keep close

- [Imports and exports](/learn/book/organization/imports-and-exports)
- [Packages](/learn/book/organization/packages)
- [Foreign](/learn/book/advanced/foreign)
