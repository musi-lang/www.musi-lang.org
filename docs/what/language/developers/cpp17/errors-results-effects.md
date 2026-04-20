---
title: "Errors, Results, and Effects"
description: "Read Errors, Results, and Effects as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 8
slug: "errors-results-effects"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

Optional values, nullable pointers, and exceptions solve different C++ problems. Musi keeps expected absence in Option and leaves effects or results for work that can fail for a reason.

{{compare:cpp17-errors-results-effects}}

## Reading Errors, Results, and Effects from C++17

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a C++ reader, the key topic is errors, results, and effects.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. In C++, this appears often in errors, results, and effects.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Using](/learn/book/effects-runtime/using)
- [Handlers](/learn/book/effects-runtime/handlers)
