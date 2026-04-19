---
title: "Names, Mutation, and Fresh Values"
description: "Read Names, Mutation, and Fresh Values as a guide for Python readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Python Developers"
order: 4
slug: "names-mutation"
summary: "Start from Python habits, then use the Musi Book for the full rule."
---

For a Python reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:python-names-mutation}}

## Reading Names, Mutation, and Fresh Values from Python

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a Python reader, the key topic is names, mutation, and fresh values.

## Common mistake

Do not preserve call ceremony just because the source language needs it for methods, receivers, overloads, or closures. For Python, common mistake: trusting runtime convention where Musi expects a visible type or effect. Musi `class` is closer to a clear protocol than a Python class with attributes and methods.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Python habit still helps here: Keep the Python habit of naming the real-world thing first.

## Keep close

- [Mutation](/learn/book/start/mutation)
- [Values and let](/learn/book/start/values-and-let)
- [Blocks and expressions](/learn/book/start/blocks-and-expressions)
