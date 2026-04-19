---
title: "Modules, Packages, and Imports"
description: "Read Modules, Packages, and Imports as a guide for TypeScript readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 10
slug: "modules-packages"
summary: "Start from TypeScript habits, then use the Musi Book for the full rule."
---

For a TypeScript reader, this guide starts from familiar habits. It shows how Musi handles module and package edges.

{{compare:javascript-typescript-modules-packages}}

## Reading Modules, Packages, and Imports from JavaScript/TypeScript

In Musi, imports bring named module values into scope, so package edges stay visible where code uses them. For a TypeScript reader, the key topic is modules, packages, and imports.

## Common mistake

Do not rebuild an old global namespace, header include pile, or barrel file when one import names the owner. For TypeScript, common mistake: assuming runtime object data and compile-time behavior are the same thing. Musi `class` is not a JavaScript constructor or TypeScript class. It is behavior kept separate from records and data.

## When this pays off

Use modules when billing, routing, text, option, runtime, or encoding code has an owner worth naming. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Imports and exports](/learn/book/organization/imports-and-exports)
- [Packages](/learn/book/organization/packages)
- [Foreign](/learn/book/advanced/foreign)
