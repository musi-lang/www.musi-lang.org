---
title: "Unions, Variants, and Pattern Matching"
description: "Read Unions, Variants, and Pattern Matching as a guide for TypeScript readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "JavaScript and TypeScript Developers"
order: 7
slug: "unions-variants"
summary: "Start from TypeScript habits, then use the Musi Book for the full rule."
---

For a TypeScript reader, this guide starts from familiar habits. It shows how Musi handles named cases and pattern matching.

{{compare:javascript-typescript-unions-variants}}

## Reading Unions, Variants, and Pattern Matching from JavaScript/TypeScript

In Musi, data variants name the cases directly, and `match` reads the case split at the point where the answer is chosen. For a TypeScript reader, the key topic is unions, variants, and pattern matching.

## Common mistake

Do not keep integer tags, string unions, subshape checks, or table marker fields when a data variant is the real form. In JavaScript and TypeScript, this appears often in unions, variants, and pattern matching.

## When this pays off

Use data variants when an order, animal, traffic light, payment state, or parser result has a closed set of cases. The JavaScript/TypeScript habit still helps here: Keep the TypeScript habit of reading the fields before reading how it works.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Records](/learn/book/data/records)
