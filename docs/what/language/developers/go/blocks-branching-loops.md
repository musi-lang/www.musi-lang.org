---
title: "Blocks, Branching, and Loops"
description: "Read Blocks, Branching, and Loops as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 3
slug: "blocks-branching-loops"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

For a Go reader, this guide starts from familiar habits. It shows how Musi handles branching and block results.

{{compare:go-blocks-branching-loops}}

## Reading Blocks, Branching, and Loops from Go

In Musi, blocks and matches are expressions when they produce a value; the branch answer matters more than the statement container. For a Go reader, the key topic is blocks, branching, and loops.

## Common mistake

Do not keep extra variables only to move a branch result out of a statement block. For Go, common mistake: using absence or failure as a hidden path because Go makes that cheap. Musi `class` is closer to an interface rule with instances. It is not a struct. It is not a method set from package convention.

## When this pays off

Use this pattern when a route fee, access decision, or small rule table chooses one value from several cases. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Blocks and expressions](/learn/book/start/blocks-and-expressions)
- [Patterns](/learn/book/data/patterns)
- [Operators](/learn/book/core/operators)
