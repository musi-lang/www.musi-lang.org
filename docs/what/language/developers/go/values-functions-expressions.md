---
title: "Values, Functions, and Final Expressions"
description: "Read Values, Functions, and Final Expressions as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 2
slug: "values-functions-expressions"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

For a Go reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:go-values-functions-expressions}}

## Reading Values, Functions, and Final Expressions from Go

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a Go reader, the key topic is values, functions, and final expressions.

## Common mistake

Do not keep extra call steps from Go when the task is values, functions, and final expressions. Keep one clear call per data step in Musi. In Go, this appears often in values, functions, and final expressions.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Values and let](/learn/book/start/values-and-let)
- [Functions](/learn/book/core/functions)
- [Calls](/learn/book/core/calls)
