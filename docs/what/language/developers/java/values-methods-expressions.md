---
title: "Values, Methods, and Expressions"
description: "Read Values, Methods, and Expressions as a guide for Java readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Java Developers"
order: 2
slug: "values-methods-expressions"
summary: "Start from Java habits, then use the Musi Book for the full rule."
---

For a Java reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:java-values-methods-expressions}}

## Reading Values, Methods, and Expressions from Java

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a Java reader, the key topic is values, methods, and expressions.

## Common mistake

Do not preserve call ceremony just because the source language needs it for methods, receivers, overloads, or closures. For Java, common mistake: reading Musi `class` as an object type by name with constructors and fields. Musi `class` is behavior supplied by instances. Records and data model data.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Java habit still helps here: Keep the Java habit of naming APIs for future readers.

## Keep close

- [Values and let](/learn/book/start/values-and-let)
- [Functions](/learn/book/core/functions)
- [Calls](/learn/book/core/calls)
