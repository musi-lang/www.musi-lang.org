---
title: "Errors, Results, and Effects"
description: "Read Errors, Results, and Effects as a guide for C readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C Developers"
order: 8
slug: "errors-results-effects"
summary: "Start from C habits, then use the Musi Book for the full rule."
---

A null pointer or `-1` return in C depends on everyone remembering the convention. Musi moves that convention into `Option` so the empty ticket or missing badge cannot be ignored accidentally.

{{compare:c99-errors-results-effects}}

## Reading Errors, Results, and Effects from C99

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a C reader, the key topic is errors, results, and effects.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. In C, this appears often in errors, results, and effects.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The C99 habit still helps here: Keep the C habit of asking where memory, symbols, and failures come from.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Requirements](/learn/book/effects-runtime/requirements)
- [Handlers](/learn/book/effects-runtime/handlers)
