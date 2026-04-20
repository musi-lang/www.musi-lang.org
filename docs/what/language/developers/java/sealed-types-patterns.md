---
title: "Sealed Types and Patterns"
description: "Read Sealed Types and Patterns as a guide for Java readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Java Developers"
order: 9
slug: "sealed-types-patterns"
summary: "Start from Java habits, then use the Musi Book for the full rule."
---

For a Java reader, this guide starts from familiar habits. It shows how Musi handles named cases and pattern matching.

{{compare:java-sealed-types-patterns}}

## Reading Sealed Types and Patterns from Java

In Musi, data variants name the cases directly, and `match` reads the case split at the point where the answer is chosen. For a Java reader, the key topic is sealed types and patterns.

## Common mistake

Do not keep integer tags, string unions, subclass checks, or table marker fields when a data variant is the real form. In Java, this appears often in sealed types and patterns.

## When this pays off

Use data variants when an order, animal, traffic light, payment state, or parser result has a closed set of cases. The Java habit still helps here: Keep the Java habit of naming APIs for future readers.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Records](/learn/book/data/records)
