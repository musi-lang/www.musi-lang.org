---
title: "Blocks, Branching, and Repetition"
description: "Read Blocks, Branching, and Repetition as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 4
slug: "blocks-branching-repetition"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

For a Lua reader, this guide starts from familiar habits. It shows how Musi handles branching and block results.

{{compare:lua-blocks-branching-repetition}}

## Reading Blocks, Branching, and Repetition from Lua

In Musi, blocks and matches are expressions when they produce a value; the branch answer matters more than the statement container. For a Lua reader, the key topic is blocks, branching, and repetition.

## Common mistake

Do not keep extra variables only to move a branch result out of a statement block. For Lua, common mistake: letting table fields, missing fields, and behavior conventions blur together. Musi `class` is not a metatable pattern; records and data hold table-like data, classes/instances name promised behavior.

## When this pays off

Use this pattern when a route fee, access decision, or small rule table chooses one value from several cases. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Blocks and expressions](/learn/book/start/blocks-and-expressions)
- [Patterns](/learn/book/data/patterns)
- [Operators](/learn/book/core/operators)
