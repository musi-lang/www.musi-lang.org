---
title: "Methods and Receiver Calls"
description: "Read Methods and Receiver Calls as a guide for C readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C Developers"
order: 11
slug: "methods-and-receiver-calls"
summary: "Start from C habits, then use the Musi Book for the full rule."
---

C often splits a tiny calculation across named parts because headers and prototypes form the file. In Musi, the receipt total can be the function body itself when no pointer or status channel is involved.

{{compare:c99-methods-and-receiver-calls}}

## Reading Methods and Receiver Calls from C99

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a C reader, the key topic is methods and receiver calls.

## Common mistake

Do not preserve call ceremony just because the source language needs it for methods, receivers, overloads, or closures. For C, common mistake: treating convention as a contract. Musi `class` is not a C struct with function pointers; records and data hold data, classes name behavior a type can provide.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The C99 habit still helps here: Keep the C habit of asking where memory, symbols, and failures come from.

## Keep close

- [Calls](/learn/book/core/calls)
- [Dot calls](/learn/book/core/dot-calls)
- [Functions](/learn/book/core/functions)
