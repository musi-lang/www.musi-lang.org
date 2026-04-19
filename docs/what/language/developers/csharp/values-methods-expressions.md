---
title: "Values, Methods, and Expressions"
description: "Read Values, Methods, and Expressions as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 2
slug: "values-methods-expressions"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:csharp-values-methods-expressions}}

## Reading Values, Methods, and Expressions from C#

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a C# reader, the key topic is values, methods, and expressions.

## Common mistake

Do not preserve call ceremony just because the source language needs it for methods, receivers, overloads, or closures. For C#, common mistake: mapping Musi classes to object classes or service containers. Musi `class` is a behavior, not a CLR class with fields, constructors, and inheritance.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Values and let](/learn/book/start/values-and-let)
- [Functions](/learn/book/core/functions)
- [Calls](/learn/book/core/calls)
