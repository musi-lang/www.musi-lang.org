---
title: "Generics, Interfaces, and Laws"
description: "Read Generics, Interfaces, and Laws as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 10
slug: "generics-interfaces-laws"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

C# interfaces, extension methods, and generics can all describe shared operations. Musi uses one idea for this: a shape names the operation and given values provide it for concrete types. This matches CLR terms too.

{{compare:csharp-generics-interfaces-laws}}

## Reading Generics, Interfaces, and Laws from C#

In Musi, shapes name behavior a type can provide, given values provide it, and laws document promises callers rely on. For a C# reader, the key topic is generics, interfaces, and laws.

## Common mistake

Do not confuse a Musi shape with stored object state, inheritance, or a metatable. Data and behavior are separate. In C#, this appears often in generics, interfaces, and laws.

## When this pays off

Use shapes when many types share an operation such as compare, show, step, encode, or measure. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Generics](/learn/book/types/generics)
- [Shapes](/learn/book/abstractions/shapes)
- [Laws](/learn/book/abstractions/laws)
