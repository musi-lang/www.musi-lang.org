---
title: "Results, I/O, and Effects"
description: "Read Results, I/O, and Effects as a guide for Rust readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Rust Developers"
order: 8
slug: "results-effects"
summary: "Start from Rust habits, then use the Musi Book for the full rule."
---

Rust readers already know Option and Result. In Musi examples, focus less on the concept and more on the syntax: `option.someOf`, `option.noneOf`, and pattern-based callers.

{{compare:rust-results-effects}}

## Reading Results, I/O, and Effects from Rust

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a Rust reader, the key topic is results, i/o, and effects.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. For Rust, common mistake: expecting Musi syntax to mirror Rust even when the ideas are separated differently. Musi `class` is closest to a Rust trait plus law text. Instances give behavior.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The Rust habit still helps here: Keep the Rust habit of asking which type carries the invariant.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Using](/learn/book/effects-runtime/using)
- [Handlers](/learn/book/effects-runtime/handlers)
