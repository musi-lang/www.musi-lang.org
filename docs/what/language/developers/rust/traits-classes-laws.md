---
title: "Traits, Classes, Instances, and Laws"
description: "Read Traits, Classes, Instances, and Laws as a guide for Rust readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Rust Developers"
order: 6
slug: "traits-classes-laws"
summary: "Start from Rust habits, then use the Musi Book for the full rule."
---

Rust traits and impls map closely to Musi classes and instances, but laws are written as part of the promise rather than inferred from convention.

{{compare:rust-traits-classes-laws}}

## Reading Traits, Classes, Instances, and Laws from Rust

In Musi, classes name behavior a type can provide, instances provide it, and laws document promises callers rely on. For a Rust reader, the key topic is traits, classes, instances, and laws.

## Common mistake

Do not confuse a Musi class with stored object state, inheritance, or a metatable. Data and behavior are separate. For Rust, common mistake: expecting Musi syntax to mirror Rust even when the ideas are separated differently. Musi `class` is closest to a Rust trait plus law text. Instances give behavior.

## When this pays off

Use classes when many types share an operation such as compare, show, step, encode, or measure. The Rust habit still helps here: Keep the Rust habit of asking which type carries the invariant.

## Keep close

- [Classes](/learn/book/abstractions/classes)
- [Instances](/learn/book/abstractions/instances)
- [Laws](/learn/book/abstractions/laws)
