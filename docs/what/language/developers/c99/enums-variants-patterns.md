---
title: "Enums, Variants, and Patterns"
description: "Read Enums, Variants, and Patterns as a guide for C readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C Developers"
order: 9
slug: "enums-variants-patterns"
summary: "Start from C habits, then use the Musi Book for the full rule."
---

For a C reader, this guide starts from familiar habits. It shows how Musi handles named cases and pattern matching.

{{compare:c99-enums-variants-patterns}}

## Reading Enums, Variants, and Patterns from C99

In Musi, data variants name the cases directly, and `match` reads the case split at the point where the answer is chosen. For a C reader, the key topic is enums, variants, and patterns.

## Common mistake

Do not keep integer tags, string unions, subshape checks, or table marker fields when a data variant is the real form. In C, this appears often in enums, variants, and patterns.

## When this pays off

Use data variants when an order, animal, traffic light, payment state, or parser result has a closed set of cases. The C99 habit still helps here: Keep the C habit of asking where memory, symbols, and failures come from.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Records](/learn/book/data/records)
