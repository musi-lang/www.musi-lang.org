---
title: "Traits, Shapes, Given Values, and Laws"
description: "Read Traits, Shapes, Given Values, and Laws as a guide for Rust readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Rust Developers"
order: 6
slug: "traits-shapes-laws"
summary: "Start from Rust habits, then use the Musi Book for the full rule."
---

Rust traits and impls map closely to Musi shapes and given values, but laws are written as part of the promise rather than inferred from convention.

{{compare:rust-traits-shapes-laws}}

## Reading Traits, Shapes, Given Values, and Laws from Rust

In Musi, shapes name behavior a type can provide, given values provide it, and laws document promises callers rely on. For a Rust reader, the key topic is traits, shapes, given values, and laws.

## Common mistake

Do not confuse a Musi shape with stored object state, inheritance, or a metatable. Data and behavior are separate. In Rust, this appears often in traits, shapes, given values, and laws.

## When this pays off

Use shapes when many types share an operation such as compare, show, step, encode, or measure. The Rust habit still helps here: Keep the Rust habit of asking which type carries the invariant.

## Keep close

- [Shapes](/learn/book/abstractions/shapes)
- [Instances](/learn/book/abstractions/given-values)
- [Laws](/learn/book/abstractions/laws)
