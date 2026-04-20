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

Do not treat class as stored object data from C while reading structs, classes, and records. Start with records or variants for data. In C, this appears often in structs, classes, and records.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The C99 habit still helps here: Keep the C habit of asking where memory, symbols, and failures come from.

## Keep close

- [Records](/learn/book/data/records)
- [Classes](/learn/book/abstractions/classes)
- [Patterns](/learn/book/data/patterns)
