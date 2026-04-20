---
title: "Modules, Imports, and Exports"
description: "Read Modules, Imports, and Exports as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 12
slug: "modules-imports-exports"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

For a Lua reader, this guide starts from familiar habits. It shows how Musi handles module and package edges.

{{compare:lua-modules-imports-exports}}

## Reading Modules, Imports, and Exports from Lua

In Musi, imports bring named module values into scope, so package edges stay visible where code uses them. For a Lua reader, the key topic is modules, imports, and exports.

## Common mistake

Do not rebuild an old global namespace, header include pile, or barrel file when one import names the owner. In Lua, this appears often in modules, imports, and exports.

## When this pays off

Use modules when billing, routing, text, option, runtime, or encoding code has an owner worth naming. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Imports and exports](/learn/book/organization/imports-and-exports)
- [Packages](/learn/book/organization/packages)
- [Foreign](/learn/book/advanced/foreign)
