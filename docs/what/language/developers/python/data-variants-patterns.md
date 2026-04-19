---
title: "Data Variants and Pattern Matching"
description: "Read Data Variants and Pattern Matching as a guide for Python readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Python Developers"
order: 9
slug: "data-variants-patterns"
summary: "Start from Python habits, then use the Musi Book for the full rule."
---

For a Python reader, this guide starts from familiar habits. It shows how Musi handles named cases and pattern matching.

{{compare:python-data-variants-patterns}}

## Reading Data Variants and Pattern Matching from Python

In Musi, data variants name the cases directly, and `match` reads the case split at the point where the answer is chosen. For a Python reader, the key topic is data variants and pattern matching.

## Common mistake

Do not keep integer tags, string unions, subclass checks, or table marker fields when a data variant is the real form. For Python, common mistake: trusting runtime convention where Musi expects a visible type or effect. Musi `class` is closer to a clear protocol than a Python class with attributes and methods.

## When this pays off

Use data variants when an order, animal, traffic light, payment state, or parser result has a closed set of cases. The Python habit still helps here: Keep the Python habit of naming the real-world thing first.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Records](/learn/book/data/records)
