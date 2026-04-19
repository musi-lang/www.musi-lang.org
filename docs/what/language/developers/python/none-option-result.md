---
title: "None, Option, and Result"
description: "Read None, Option, and Result as a guide for Python readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Python Developers"
order: 7
slug: "none-option-result"
summary: "Start from Python habits, then use the Musi Book for the full rule."
---

Python None is useful but quiet. Musi Option makes absence a branch the caller sees before touching the value.

{{compare:python-none-option-result}}

## Reading None, Option, and Result from Python

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a Python reader, the key topic is none, option, and result.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. For Python, common mistake: trusting runtime convention where Musi expects a visible type or effect. Musi `class` is closer to a clear protocol than a Python class with attributes and methods.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The Python habit still helps here: Keep the Python habit of naming the real-world thing first.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Effects](/learn/book/effects-runtime/effects)
