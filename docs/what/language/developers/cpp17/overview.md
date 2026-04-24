---
title: "Overview"
description: "Map C++17 habits to the Musi Book without repeating every construct example."
group: "Musi for Developers"
section: "C++ Developers"
order: 1
slug: "overview"
summary: "Use this guide when C++17 habits make Musi feel surprising."
---

C++17 builds large systems from value types, RAII, templates, overloads, exceptions, and carefully hidden resource edges. Musi keeps the taste for named operations and static promises, but separates stored data from behaviors: records and data describe things, shapes describe operations, effects and native named parts mark edge work.

Use this as a translation guide for C++17 code. Start with the familiar habit, then ask which Musi construct owns the same promise. A page is successful when it tells you which old habit to keep and which old shortcut to drop.

## Start from the habit that hurts

- [Values, Functions, and Expressions](/learn/guides/cpp17/values-functions-expressions) - values habits get translated once, then the Musi Book owns the details.
- [Blocks and Control Flow](/learn/guides/cpp17/blocks-control-flow) - blocks habits get translated once, then the Musi Book owns the details.
- [Variables and Mutation](/learn/guides/cpp17/variables-mutation) - mutation habits get translated once, then the Musi Book owns the details.
- [Structs and Records](/learn/guides/cpp17/structs-classes-records) - records habits get translated once, then the Musi Book owns the details.
- [Arrays, Pointers, and Slices](/learn/guides/cpp17/arrays-pointers-slices) - arrays habits get translated once, then the Musi Book owns the details.
- [Null, Option, and Result](/learn/guides/cpp17/null-option-result) - absence and failure stop being hidden paths.
- [Errors, Results, and Effects](/learn/guides/cpp17/errors-results-effects) - outside work becomes a named ask.
- [Enums, Variants, and Patterns](/learn/guides/cpp17/enums-variants-patterns) - patterns habits get translated once, then the Musi Book owns the details.
- [Templates, Concepts, Classes, and Laws](/learn/guides/cpp17/templates-concepts-shapes-laws) - generics habits get translated once, then the Musi Book owns the details.
- [Methods and Receiver Calls](/learn/guides/cpp17/methods-and-receiver-calls) - calls habits get translated once, then the Musi Book owns the details.
- [Headers, Modules, and Packages](/learn/guides/cpp17/headers-modules-packages) - package edges replace compatibility-era habits.
- [Testing and Tools](/learn/guides/cpp17/testing-tooling) - testing habits get translated once, then the Musi Book owns the details.
- [Unsafe, FFI, and Native Edges](/learn/guides/cpp17/unsafe-ffi-native-boundaries) - native edges stay small enough to check.

## Habits that still help

- Keep the C++ habit of asking which operation is generic and which value owns the data.
- Drop inheritance-first and overload-first reflexes when a record, data variant, or clear given value says the same thing plainly.
- Keep examples tied to normal work: receipts, routes, files, animals, people, rooms, and services.

## First common mistake

Musi `shape` is closer to a concept or trait than a C++ class. Records and data store data. Given values provide behavior. If you need a person, car, invoice, or package, start with records or data. If you need any type that can compare, show, encode, or step, use a shape with given values.

## When to switch to the Musi Book

Stay in this guide while a C++17 habit is getting in the way. Switch to [Values and let](/learn/book/start/values-and-let), [Records](/learn/book/data/records), [Patterns](/learn/book/data/patterns), [Generics](/learn/book/types/generics), [Shapes](/learn/book/abstractions/shapes), and [Effects](/learn/book/effects-runtime/effects) when you need the main rule.
