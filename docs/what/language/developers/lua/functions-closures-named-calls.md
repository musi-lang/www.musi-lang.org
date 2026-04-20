---
title: "Functions, Closures, and Named Calls"
description: "Read Functions, Closures, and Named Calls as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 3
slug: "functions-closures-named-calls"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

For a Lua reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:lua-functions-closures-named-calls}}

## Reading Functions, Closures, and Named Calls from Lua

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a Lua reader, the key topic is functions, closures, and named calls.

## Common mistake

Do not keep extra call steps from Lua when the task is functions, closures, and named calls. Keep one clear call per data step in Musi. In Lua, this appears often in functions, closures, and named calls.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Values and let](/learn/book/start/values-and-let)
- [Functions](/learn/book/core/functions)
- [Calls](/learn/book/core/calls)
