---
title: "Records, Classes, and Objects"
description: "Read Records, Classes, and Objects as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 5
slug: "records-classes-objects"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar habits. It shows how Musi handles field-based data.

{{compare:csharp-records-classes-objects}}

## Reading Records, Classes, and Objects from C#

In Musi, records and data variants describe stored data. Behavior belongs in functions or classes/instances, not inside an object by default. For a C# reader, the key topic is records, classes, and objects.

## Common mistake

Do not read `class` as object data. If the page is about a pet, invoice, room, or vehicle, start with fields or variants. For C#, common mistake: mapping Musi classes to object classes or service containers. Musi `class` is a behavior, not a CLR class with fields, constructors, and inheritance.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Records](/learn/book/data/records)
- [Classes](/learn/book/abstractions/classes)
- [Patterns](/learn/book/data/patterns)
