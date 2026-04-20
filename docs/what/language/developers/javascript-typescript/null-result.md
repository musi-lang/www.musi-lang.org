---
title: "Null, Undefined, Option, and Result"
description: "Read Null, Undefined, Option, and Result as a guide for TypeScript readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 6
slug: "null-result"
summary: "Start from TypeScript habits, then use the Musi Book for the full rule."
---

Undefined, optional properties, and nullable unions are common TypeScript habits. Musi uses `someOf` and `noneOf` so expected absence has one visible form in examples.

{{compare:javascript-typescript-null-result}}

## Reading Null, Undefined, Option, and Result from JavaScript/TypeScript

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a TypeScript reader, the key topic is null, undefined, option, and result.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. In JavaScript and TypeScript, this appears often in null, undefined, option, and result.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Effects](/learn/book/effects-runtime/effects)
