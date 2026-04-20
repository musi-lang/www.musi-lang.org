---
title: "Errors, Pcall, and Effects"
description: "Read Errors, Pcall, and Effects as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 8
slug: "errors-pcall-effects"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

For a Lua reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:lua-errors-pcall-effects}}

## Reading Errors, Pcall, and Effects from Lua

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a Lua reader, the key topic is errors, pcall, and effects.

## Common mistake

Do not keep extra call steps from Lua when the task is errors, pcall, and effects. Keep one clear call per data step in Musi. In Lua, this appears often in errors, pcall, and effects.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Using](/learn/book/effects-runtime/using)
- [Handlers](/learn/book/effects-runtime/handlers)
