---
title: "Macros, Generics, Classes, and Laws"
description: "Read Macros, Generics, Classes, and Laws as a guide for C readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C Developers"
order: 10
slug: "templates-concepts-classes-laws"
summary: "Start from C habits, then use the Musi Book for the full rule."
---

For a C reader, this guide starts from familiar habits. It shows how Musi handles generic behaviors.

{{compare:c99-templates-concepts-classes-laws}}

## Reading Macros, Generics, Classes, and Laws from C99

In Musi, classes name behavior a type can provide, instances provide it, and laws document promises callers rely on. For a C reader, the key topic is macros, generics, classes, and laws.

## Common mistake

Do not confuse a Musi class with stored object state, inheritance, or a metatable. Data and behavior are separate. In C, this appears often in macros, generics, classes, and laws.

## When this pays off

Use classes when many types share an operation such as compare, show, step, encode, or measure. The C99 habit still helps here: Keep the C habit of asking where memory, symbols, and failures come from.

## Keep close

- [Generics](/learn/book/types/generics)
- [Classes](/learn/book/abstractions/classes)
- [Laws](/learn/book/abstractions/laws)
