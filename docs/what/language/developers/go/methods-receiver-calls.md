---
title: "Methods and Receiver Calls"
description: "Read Methods and Receiver Calls as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 12
slug: "methods-receiver-calls"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

For a Go reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:go-methods-receiver-calls}}

## Reading Methods and Receiver Calls from Go

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a Go reader, the key topic is methods and receiver calls.

## Common mistake

Do not preserve call ceremony just because the source language needs it for methods, receivers, overloads, or closures. For Go, common mistake: using absence or failure as a hidden path because Go makes that cheap. Musi `class` is closer to an interface rule with instances. It is not a struct. It is not a method set from package convention.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Calls](/learn/book/core/calls)
- [Dot calls](/learn/book/core/dot-calls)
- [Functions](/learn/book/core/functions)
