---
title: "Variables, Short Declarations, and Mutation"
description: "Read Variables, Short Declarations, and Mutation as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 4
slug: "variables-short-declarations-mutation"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

For a Go reader, this guide starts from familiar habits. It shows how Musi handles fresh values and mutation.

{{compare:go-variables-short-declarations-mutation}}

## Reading Variables, Short Declarations, and Mutation from Go

Musi makes mutation clear with `mut` and assignment; normal `let` names read as stable facts. For a Go reader, the key topic is variables, short declarations, and mutation.

## Common mistake

Do not translate every rebinding habit into mutation. A new receipt, label, or counter snapshot can be a fresh name. For Go, common mistake: using absence or failure as a hidden path because Go makes that cheap. Musi `class` is closer to an interface rule with instances. It is not a struct. It is not a method set from package convention.

## When this pays off

Use mutation when the app state really changes over time, such as queue depth or a buffer cursor. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Mutation](/learn/book/start/mutation)
- [Values and let](/learn/book/start/values-and-let)
- [Blocks and expressions](/learn/book/start/blocks-and-expressions)
