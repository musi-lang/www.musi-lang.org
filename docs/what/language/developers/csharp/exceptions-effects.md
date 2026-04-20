---
title: "Exceptions, Results, and Effects"
description: "Read Exceptions, Results, and Effects as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 8
slug: "exceptions-effects"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar C# and CLR habits. It shows how Musi handles absence and failure branches.

{{compare:csharp-exceptions-effects}}

## Reading Exceptions, Results, and Effects from C#

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a C# reader, the key topic is exceptions, results, and effects.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. In C#, this appears often in exceptions, results, and effects.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Using](/learn/book/effects-runtime/using)
- [Handlers](/learn/book/effects-runtime/handlers)
