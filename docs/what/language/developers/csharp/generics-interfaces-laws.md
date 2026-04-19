---
title: "Generics, Interfaces, and Laws"
description: "Read Generics, Interfaces, and Laws as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 10
slug: "generics-interfaces-laws"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

C# interfaces, extension methods, and generics can all describe shared operations. Musi uses one idea for this: a class names the operation and instances provide it for concrete types.

{{compare:csharp-generics-interfaces-laws}}

## Reading Generics, Interfaces, and Laws from C#

In Musi, classes name behavior a type can provide, instances provide it, and laws document promises callers rely on. For a C# reader, the key topic is generics, interfaces, and laws.

## Common mistake

Do not confuse a Musi class with stored object state, inheritance, or a metatable. Data and behavior are separate. For C#, common mistake: mapping Musi classes to object classes or service containers. Musi `class` is a behavior, not a CLR class with fields, constructors, and inheritance.

## When this pays off

Use classes when many types share an operation such as compare, show, step, encode, or measure. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Generics](/learn/book/types/generics)
- [Classes](/learn/book/abstractions/classes)
- [Laws](/learn/book/abstractions/laws)
