---
title: "Pattern Matching and Data Variants"
description: "Read Pattern Matching and Data Variants as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 11
slug: "pattern-matching-data-variants"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

For a Lua reader, this guide starts from familiar habits. It shows how Musi handles named cases and pattern matching.

{{compare:lua-pattern-matching-data-variants}}

## Reading Pattern Matching and Data Variants from Lua

In Musi, data variants name the cases directly, and `match` reads the case split at the point where the answer is chosen. For a Lua reader, the key topic is pattern matching and data variants.

## Common mistake

Do not keep integer tags, string unions, subclass checks, or table marker fields when a data variant is the real form. In Lua, this appears often in pattern matching and data variants.

## When this pays off

Use data variants when an order, animal, traffic light, payment state, or parser result has a closed set of cases. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Records](/learn/book/data/records)
