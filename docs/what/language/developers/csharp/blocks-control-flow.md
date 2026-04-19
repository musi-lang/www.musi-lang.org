---
title: "Blocks and Control Flow"
description: "Read Blocks and Control Flow as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 3
slug: "blocks-control-flow"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar habits. It shows how Musi handles branching and block results.

{{compare:csharp-blocks-control-flow}}

## Reading Blocks and Control Flow from C#

In Musi, blocks and matches are expressions when they produce a value; the branch answer matters more than the statement container. For a C# reader, the key topic is blocks and control flow.

## Common mistake

Do not keep extra variables only to move a branch result out of a statement block. For C#, common mistake: mapping Musi classes to object classes or service containers. Musi `class` is a behavior, not a CLR class with fields, constructors, and inheritance.

## When this pays off

Use this pattern when a route fee, access decision, or small rule table chooses one value from several cases. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Blocks and expressions](/learn/book/start/blocks-and-expressions)
- [Patterns](/learn/book/data/patterns)
- [Operators](/learn/book/core/operators)
