---
title: "Null, Option, and Result"
description: "Read Null, Option, and Result as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 7
slug: "null-option-result"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

Optional values, nullable pointers, and exceptions solve different C++ problems. Musi keeps expected absence in Option and leaves effects or results for work that can fail for a reason.

{{compare:cpp17-null-option-result}}

## Reading Null, Option, and Result from C++17

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a C++ reader, the key topic is null, option, and result.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. For C++, common mistake: turning every Musi value into a class-heavy design. Musi `class` is closer to a concept or trait than a C++ class. Records and data store data. Instances give behavior.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Effects](/learn/book/effects-runtime/effects)
