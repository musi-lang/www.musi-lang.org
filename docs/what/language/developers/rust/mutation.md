---
title: "Mutation"
description: "Read Mutation as a guide for Rust readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Rust Developers"
order: 3
slug: "mutation"
summary: "Start from Rust habits, then use the Musi Book for the full rule."
---

For a Rust reader, this guide starts from familiar habits. It shows how Musi handles fresh values and mutation.

{{compare:rust-mutation}}

## Reading Mutation from Rust

Musi makes mutation clear with `mut` and assignment; normal `let` names read as stable facts. For a Rust reader, the key topic is mutation.

## Common mistake

Do not force mutation habits from Rust into mutation. In Musi, a fresh name is often the clearer step. In Rust, this appears often in mutation.

## When this pays off

Use mutation when the app state really changes over time, such as queue depth or a buffer cursor. The Rust habit still helps here: Keep the Rust habit of asking which type carries the invariant.

## Keep close

- [Mutation](/learn/book/start/mutation)
- [Values and let](/learn/book/start/values-and-let)
- [Blocks and expressions](/learn/book/start/blocks-and-expressions)
