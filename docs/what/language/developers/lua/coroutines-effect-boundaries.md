---
title: "Coroutines and Effect Edges"
description: "Read Coroutines and Effect Edges as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 9
slug: "coroutines-effect-boundaries"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

Lua coroutines separate pause and resume, but they do not by themselves describe which outside service is being asked. Musi effects name that service edge.

{{compare:lua-coroutines-effect-boundaries}}

## Reading Coroutines and Effect Edges from Lua

Musi names outside work with effects and `ask`, instead of hiding time, files, console work, or services inside a normal call. For a Lua reader, the key topic is coroutines and effect edges.

## Common mistake

Do not make an effect look pure. A clock, process, network service, or console changes the trust edge. In Lua, this appears often in coroutines and effect edges.

## When this pays off

Use effects when the program asks the runtime, OS, user, or another service for an answer. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Requirements](/learn/book/effects-runtime/requirements)
- [Handlers](/learn/book/effects-runtime/handlers)
