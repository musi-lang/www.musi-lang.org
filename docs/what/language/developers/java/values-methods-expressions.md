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

Do not keep extra call steps from Java when the task is values, methods, and expressions. Keep one clear call per data step in Musi. In Java, this appears often in values, methods, and expressions.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Java habit still helps here: Keep the Java habit of naming APIs for future readers.

## Keep close

- [Values and let](/learn/book/start/values-and-let)
- [Functions](/learn/book/core/functions)
- [Calls](/learn/book/core/calls)
