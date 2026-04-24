---
title: "Unions and Pattern Matching"
description: "Read Unions and Pattern Matching as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 9
slug: "unions-pattern-matching"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar C# and CLR habits. It shows how Musi handles named cases and pattern matching.

{{compare:csharp-unions-pattern-matching}}

## Reading Unions and Pattern Matching from C#

In Musi, data variants name the cases directly, and `match` reads the case split at the point where the answer is chosen. For a C# reader, the key topic is unions and pattern matching.

## Common mistake

Do not keep integer tags, string unions, subshape checks, or table marker fields when a data variant is the real form. In C#, this appears often in unions and pattern matching.

## When this pays off

Use data variants when an order, animal, traffic light, payment state, or parser result has a closed set of cases. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Records](/learn/book/data/records)
