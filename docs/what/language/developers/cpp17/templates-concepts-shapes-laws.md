---
title: "Templates, Concepts, Classes, and Laws"
description: "Read Templates, Concepts, Classes, and Laws as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 10
slug: "templates-concepts-shapes-laws"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

C++ templates and concepts can mix type construction, overload selection, and behavior requirements. Musi splits that apart: data builds values, shapes name required behavior, given values supply it.

{{compare:cpp17-templates-concepts-shapes-laws}}

## Reading Templates, Concepts, Classes, and Laws from C++17

In Musi, shapes name behavior a type can provide, given values provide it, and laws document promises callers rely on. For a C++ reader, the key topic is templates, concepts, shapes, and laws.

## Common mistake

Do not confuse a Musi shape with stored object state, inheritance, or a metatable. Data and behavior are separate. In C++, this appears often in templates, concepts, classes, and laws.

## When this pays off

Use shapes when many types share an operation such as compare, show, step, encode, or measure. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Generics](/learn/book/types/generics)
- [Shapes](/learn/book/abstractions/shapes)
- [Laws](/learn/book/abstractions/laws)
