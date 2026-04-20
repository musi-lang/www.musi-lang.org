---
title: "Values, Functions, and Final Expressions"
description: "Read Values, Functions, and Final Expressions as a guide for Rust readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Rust Developers"
order: 2
slug: "values-functions"
summary: "Start from Rust habits, then use the Musi Book for the full rule."
---

For a Rust reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:rust-values-functions}}

## Reading Values, Functions, and Final Expressions from Rust

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a Rust reader, the key topic is values, functions, and final expressions.

## Common mistake

Do not keep extra call steps from Rust when the task is values, functions, and final expressions. Keep one clear call per data step in Musi. In Rust, this appears often in values, functions, and final expressions.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Rust habit still helps here: Keep the Rust habit of asking which type carries the invariant.

## Keep close

- [Values and let](/learn/book/start/values-and-let)
- [Functions](/learn/book/core/functions)
- [Calls](/learn/book/core/calls)
