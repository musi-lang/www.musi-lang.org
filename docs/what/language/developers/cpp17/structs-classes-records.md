---
title: "Structs and Records"
description: "Read Structs and Records as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 5
slug: "structs-classes-records"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

C++ classes can store fields, enforce invariants, overload operators, and manage resources at once. Musi asks whether this page needs fields, variants, or behavior before choosing records, data, or classes.

{{compare:cpp17-structs-classes-records}}

## Reading Structs and Records from C++17

In Musi, records and data variants describe stored data. Behavior belongs in functions or shapes and given values, not inside an object by default. For a C++ reader, the key topic is structs and records.

## Common mistake

Do not treat source-language classes as stored object data from C++ while reading structs and records. Start with records or variants for data. In C++, this appears often in structs and records.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Records](/learn/book/data/records)
- [Shapes](/learn/book/abstractions/shapes)
- [Patterns](/learn/book/data/patterns)
