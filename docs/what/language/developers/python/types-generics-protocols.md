---
title: "Types, Generics, and Protocols"
description: "Read Types, Generics, and Protocols as a guide for Python readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Python Developers"
order: 10
slug: "types-generics-protocols"
summary: "Start from Python habits, then use the Musi Book for the full rule."
---

For a Python reader, this guide starts from familiar habits. It shows how Musi handles generic behaviors.

{{compare:python-types-generics-protocols}}

## Reading Types, Generics, and Protocols from Python

In Musi, classes name behavior a type can provide, instances provide it, and laws document promises callers rely on. For a Python reader, the key topic is types, generics, and protocols.

## Common mistake

Do not confuse a Musi class with stored object state, inheritance, or a metatable. Data and behavior are separate. In Python, this appears often in types, generics, and protocols.

## When this pays off

Use classes when many types share an operation such as compare, show, step, encode, or measure. The Python habit still helps here: Keep the Python habit of naming the real-world thing first.

## Keep close

- [Generics](/learn/book/types/generics)
- [Classes](/learn/book/abstractions/classes)
- [Laws](/learn/book/abstractions/laws)
