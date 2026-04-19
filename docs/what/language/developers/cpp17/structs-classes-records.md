---
title: "Structs, Classes, and Records"
description: "Read Structs, Classes, and Records as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 5
slug: "structs-classes-records"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

C++ classes can store fields, enforce invariants, overload operators, and manage resources at once. Musi asks whether this page needs fields, variants, or behavior before choosing records, data, or classes.

{{compare:cpp17-structs-classes-records}}

## Reading Structs, Classes, and Records from C++17

In Musi, records and data variants describe stored data. Behavior belongs in functions or classes/instances, not inside an object by default. For a C++ reader, the key topic is structs, classes, and records.

## Common mistake

Do not read `class` as object data. If the page is about a pet, invoice, room, or vehicle, start with fields or variants. For C++, common mistake: turning every Musi value into a class-heavy design. Musi `class` is closer to a concept or trait than a C++ class. Records and data store data. Instances give behavior.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Records](/learn/book/data/records)
- [Classes](/learn/book/abstractions/classes)
- [Patterns](/learn/book/data/patterns)
