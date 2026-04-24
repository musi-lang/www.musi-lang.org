---
title: "Overview"
description: "Map Rust habits to the Musi Book without repeating every construct example."
group: "Musi for Developers"
section: "Rust Developers"
order: 1
slug: "overview"
summary: "Use this guide when Rust habits make Musi feel surprising."
---

Rust readers already look for ownership, enums, traits, Result, modules, pattern matching, and clear unsafe. Musi shares the habit of making branches and contracts visible, but has its own split: data for variants, records for fields, shapes and given values for behavior, effects for asked outside work, and native named parts for native edges.

Use this as a translation guide for Rust code. Start with the familiar habit, then ask which Musi construct owns the same promise. A page is successful when it tells you which old habit to keep and which old shortcut to drop.

## Start from the habit that hurts

- [Values, Functions, and Final Expressions](/learn/guides/rust/values-functions) - values habits get translated once, then the Musi Book owns the details.
- [Mutation](/learn/guides/rust/mutation) - mutation habits get translated once, then the Musi Book owns the details.
- [Records, Structs, and Field Updates](/learn/guides/rust/records-structs) - records habits get translated once, then the Musi Book owns the details.
- [Enums, Data, and Pattern Matching](/learn/guides/rust/enums-data) - patterns habits get translated once, then the Musi Book owns the details.
- [Traits, Shapes, Given Values, and Laws](/learn/guides/rust/traits-shapes-laws) - behaviors stop hiding in object habits.
- [Generics and Type Constructors](/learn/guides/rust/generics) - generics habits get translated once, then the Musi Book owns the details.
- [Results, I/O, and Effects](/learn/guides/rust/results-effects) - outside work becomes a named ask.
- [Modules, Packages, and Visibility](/learn/guides/rust/modules-packages) - package edges replace compatibility-era habits.
- [Unsafe and FFI](/learn/guides/rust/unsafe-ffi) - native edges stay small enough to check.
- [Testing and Tools](/learn/guides/rust/testing-tooling) - testing habits get translated once, then the Musi Book owns the details.

## Habits that still help

- Keep the Rust habit of asking which type carries the invariant.
- Drop syntax expectations around impl, lifetimes, and match punctuation; read the Musi contract instead.
- Keep examples tied to normal work: receipts, routes, files, animals, people, rooms, and services.

## First common mistake

Musi `shape` is closest to a Rust trait plus law text. Given values provide behavior. If you need a person, car, invoice, or package, start with records or data. If you need any type that can compare, show, encode, or step, use a shape with given values.

## When to switch to the Musi Book

Stay in this guide while a Rust habit is getting in the way. Switch to [Values and let](/learn/book/start/values-and-let), [Records](/learn/book/data/records), [Patterns](/learn/book/data/patterns), [Generics](/learn/book/types/generics), [Shapes](/learn/book/abstractions/shapes), and [Effects](/learn/book/effects-runtime/effects) when you need the main rule.
