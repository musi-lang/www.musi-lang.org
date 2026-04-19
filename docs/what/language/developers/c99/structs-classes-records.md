---
title: "Structs, Classes, and Records"
description: "Read Structs, Classes, and Records as a guide for C readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C Developers"
order: 5
slug: "structs-classes-records"
summary: "Start from C habits, then use the Musi Book for the full rule."
---

For a C reader, this guide starts from familiar habits. It shows how Musi handles field-based data.

{{compare:c99-structs-classes-records}}

## Reading Structs, Classes, and Records from C99

In Musi, records and data variants describe stored data. Behavior belongs in functions or classes/instances, not inside an object by default. For a C reader, the key topic is structs, classes, and records.

## Common mistake

Do not read `class` as object data. If the page is about a pet, invoice, room, or vehicle, start with fields or variants. For C, common mistake: treating convention as a contract. Musi `class` is not a C struct with function pointers; records and data hold data, classes name behavior a type can provide.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The C99 habit still helps here: Keep the C habit of asking where memory, symbols, and failures come from.

## Keep close

- [Records](/learn/book/data/records)
- [Classes](/learn/book/abstractions/classes)
- [Patterns](/learn/book/data/patterns)
