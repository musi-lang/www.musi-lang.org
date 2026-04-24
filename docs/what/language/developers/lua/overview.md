---
title: "Overview"
description: "Map Lua 5.4.8 habits to the Musi Book without repeating every construct example."
group: "Musi for Developers"
section: "Lua Developers"
order: 1
slug: "overview"
summary: "Use this guide when Lua habits make Musi feel surprising."
---

Lua teaches direct tables, small functions, metatables, coroutines, nil, and host embedding. Musi keeps the small-language feel, but refuses to put every idea into a table convention. Record form, data variants, behavior shapes, effects, and native named parts stay separate so the compiler can follow them.

Use this as a translation guide for Lua code. Start with the familiar habit, then ask which Musi construct owns the same promise. A page is successful when it tells you which old habit to keep and which old shortcut to drop.

## Start from the habit that hurts

- [Values, Locals, and Expressions](/learn/guides/lua/values-locals-expressions) - values habits get translated once, then the Musi Book owns the details.
- [Functions, Closures, and Named Calls](/learn/guides/lua/functions-closures-named-calls) - values habits get translated once, then the Musi Book owns the details.
- [Blocks, Branching, and Repetition](/learn/guides/lua/blocks-branching-repetition) - blocks habits get translated once, then the Musi Book owns the details.
- [Tables, Records, and Field Updates](/learn/guides/lua/tables-records-field-updates) - records habits get translated once, then the Musi Book owns the details.
- [Arrays, Sequences, Maps, and Pipelines](/learn/guides/lua/arrays-sequences-maps-pipelines) - arrays habits get translated once, then the Musi Book owns the details.
- [Nil, Option, and Result](/learn/guides/lua/nil-option-result) - absence and failure stop being hidden paths.
- [Errors, Pcall, and Effects](/learn/guides/lua/errors-pcall-effects) - outside work becomes a named ask.
- [Coroutines and Effect Edges](/learn/guides/lua/coroutines-effect-boundaries) - outside work becomes a named ask.
- [Metatables, Shapes, Given Values, and Laws](/learn/guides/lua/metatables-shapes-given-laws) - records habits get translated once, then the Musi Book owns the details.
- [Pattern Matching and Data Variants](/learn/guides/lua/pattern-matching-data-variants) - patterns habits get translated once, then the Musi Book owns the details.
- [Modules, Imports, and Exports](/learn/guides/lua/modules-imports-exports) - package edges replace compatibility-era habits.
- [Testing and Tools](/learn/guides/lua/testing-tooling) - testing habits get translated once, then the Musi Book owns the details.
- [Embedding, C API, and FFI](/learn/guides/lua/embedding-c-api-ffi) - native edges stay small enough to check.

## Habits that still help

- Keep the Lua habit of using small names and simple values.
- Drop table/metatable shortcuts when Musi can name data, behavior, absence, or host calls directly.
- Keep examples tied to normal work: receipts, routes, files, animals, people, rooms, and services.

## First common mistake

Musi `shape` is not a metatable pattern; records and data hold table-like data, shapes and given values name promised behavior. If you need a person, car, invoice, or package, start with records or data. If you need any type that can compare, show, encode, or step, use a shape with given values.

## When to switch to the Musi Book

Stay in this guide while a Lua habit is getting in the way. Switch to [Values and let](/learn/book/start/values-and-let), [Records](/learn/book/data/records), [Patterns](/learn/book/data/patterns), [Generics](/learn/book/types/generics), [Shapes](/learn/book/abstractions/shapes), and [Effects](/learn/book/effects-runtime/effects) when you need the main rule.
