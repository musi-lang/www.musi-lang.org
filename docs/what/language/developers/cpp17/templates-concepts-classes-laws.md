---
title: "Templates, Concepts, Classes, and Laws"
description: "Read Templates, Concepts, Classes, and Laws as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 10
slug: "templates-concepts-classes-laws"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

C++ templates and concepts can mix type construction, overload selection, and behavior requirements. Musi splits that apart: data builds values, classes name required behavior, instances supply it.

{{compare:cpp17-templates-concepts-classes-laws}}

## Reading Templates, Concepts, Classes, and Laws from C++17

In Musi, classes name behavior a type can provide, instances provide it, and laws document promises callers rely on. For a C++ reader, the key topic is templates, concepts, classes, and laws.

## Common mistake

Do not confuse a Musi class with stored object state, inheritance, or a metatable. Data and behavior are separate. For C++, common mistake: turning every Musi value into a class-heavy design. Musi `class` is closer to a concept or trait than a C++ class. Records and data store data. Instances give behavior.

## When this pays off

Use classes when many types share an operation such as compare, show, step, encode, or measure. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Generics](/learn/book/types/generics)
- [Classes](/learn/book/abstractions/classes)
- [Laws](/learn/book/abstractions/laws)
