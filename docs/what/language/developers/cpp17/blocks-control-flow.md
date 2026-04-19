---
title: "Blocks and Control Flow"
description: "Read Blocks and Control Flow as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 3
slug: "blocks-control-flow"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

For a C++ reader, this guide starts from familiar habits. It shows how Musi handles branching and block results.

{{compare:cpp17-blocks-control-flow}}

## Reading Blocks and Control Flow from C++17

In Musi, blocks and matches are expressions when they produce a value; the branch answer matters more than the statement container. For a C++ reader, the key topic is blocks and control flow.

## Common mistake

Do not keep extra variables only to move a branch result out of a statement block. For C++, common mistake: turning every Musi value into a class-heavy design. Musi `class` is closer to a concept or trait than a C++ class. Records and data store data. Instances give behavior.

## When this pays off

Use this pattern when a route fee, access decision, or small rule table chooses one value from several cases. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Blocks and expressions](/learn/book/start/blocks-and-expressions)
- [Patterns](/learn/book/data/patterns)
- [Operators](/learn/book/core/operators)
