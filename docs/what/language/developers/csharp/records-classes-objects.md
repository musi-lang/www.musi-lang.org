---
title: "Records, Classes, and Objects"
description: "Read Records, Classes, and Objects as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 5
slug: "records-classes-objects"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar C# and CLR habits. It shows how Musi handles field-based data.

{{compare:csharp-records-classes-objects}}

## Reading Records, Classes, and Objects from C#

In Musi, records and data variants describe stored data. Behavior belongs in functions or classes/instances, not inside an object by default. For a C# reader, the key topic is records, classes, and objects.

## Common mistake

Do not treat class as stored object data from C# while reading records, classes, and objects. Start with records or variants for data. In C#, this appears often in records, classes, and objects.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Records](/learn/book/data/records)
- [Classes](/learn/book/abstractions/classes)
- [Patterns](/learn/book/data/patterns)
