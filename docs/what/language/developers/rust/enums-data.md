---
title: "Enums, Data, and Pattern Matching"
description: "Read Enums, Data, and Pattern Matching as a guide for Rust readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Rust Developers"
order: 5
slug: "enums-data"
summary: "Start from Rust habits, then use the Musi Book for the full rule."
---

For a Rust reader, this guide starts from familiar habits. It shows how Musi handles named cases and pattern matching.

{{compare:rust-enums-data}}

## Reading Enums, Data, and Pattern Matching from Rust

In Musi, data variants name the cases directly, and `match` reads the case split at the point where the answer is chosen. For a Rust reader, the key topic is enums, data, and pattern matching.

## Common mistake

Do not keep integer tags, string unions, subshape checks, or table marker fields when a data variant is the real form. In Rust, this appears often in enums, data, and pattern matching.

## When this pays off

Use data variants when an order, animal, traffic light, payment state, or parser result has a closed set of cases. The Rust habit still helps here: Keep the Rust habit of asking which type carries the invariant.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Records](/learn/book/data/records)
