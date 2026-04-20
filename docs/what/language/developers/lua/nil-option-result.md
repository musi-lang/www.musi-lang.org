---
title: "Nil, Option, and Result"
description: "Read Nil, Option, and Result as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 7
slug: "nil-option-result"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

For a Lua reader, this guide starts from familiar habits. It shows how Musi handles absence and failure branches.

{{compare:lua-nil-option-result}}

## Reading Nil, Option, and Result from Lua

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a Lua reader, the key topic is nil, option, and result.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. In Lua, this appears often in nil, option, and result.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Effects](/learn/book/effects-runtime/effects)
