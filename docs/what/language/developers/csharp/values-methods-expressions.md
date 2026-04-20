---
title: "Values, Methods, and Expressions"
description: "Read Values, Methods, and Expressions as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 2
slug: "values-methods-expressions"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar C# and CLR habits. It shows how Musi handles local values and calls.

{{compare:csharp-values-methods-expressions}}

## Reading Values, Methods, and Expressions from C#

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a C# reader, the key topic is values, methods, and expressions, including async call flow.

## Common mistake

Do not keep extra call steps from C# when the task is values, methods, and expressions. Keep one clear call per data step in Musi. In C#, this appears often in values, methods, and expressions.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Values and let](/learn/book/start/values-and-let)
- [Functions](/learn/book/core/functions)
- [Calls](/learn/book/core/calls)
