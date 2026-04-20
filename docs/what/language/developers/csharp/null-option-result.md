---
title: "Null, Option, and Result"
description: "Read Null, Option, and Result as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 7
slug: "null-option-result"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar C# and CLR habits. It shows how Musi handles absence and failure branches.

{{compare:csharp-null-option-result}}

## Reading Null, Option, and Result from C#

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a C# reader, the key topic is null, option, and result.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. In C#, this appears often in null, option, and result.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Effects](/learn/book/effects-runtime/effects)
