---
title: "Values, Locals, and Expressions"
description: "Read Values, Locals, and Expressions as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 2
slug: "values-locals-expressions"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

For a Lua reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:lua-values-locals-expressions}}

## Reading Values, Locals, and Expressions from Lua

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a Lua reader, the key topic is values, locals, and expressions.

## Common mistake

Do not keep extra call steps from Lua when the task is values, locals, and expressions. Keep one clear call per data step in Musi. In Lua, this appears often in values, locals, and expressions.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Values and let](/learn/book/start/values-and-let)
- [Functions](/learn/book/core/functions)
- [Calls](/learn/book/core/calls)
