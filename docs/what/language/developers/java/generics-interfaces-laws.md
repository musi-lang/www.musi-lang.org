---
title: "Generics, Interfaces, and Laws"
description: "Read Generics, Interfaces, and Laws as a guide for Java readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Java Developers"
order: 10
slug: "generics-interfaces-laws"
summary: "Start from Java habits, then use the Musi Book for the full rule."
---

Java interfaces describe behavior through types by name and codes. Musi classes serve the behavior role, while records and data handle the value data Java classes often contain.

{{compare:java-generics-interfaces-laws}}

## Reading Generics, Interfaces, and Laws from Java

In Musi, classes name behavior a type can provide, instances provide it, and laws document promises callers rely on. For a Java reader, the key topic is generics, interfaces, and laws.

## Common mistake

Do not confuse a Musi class with stored object state, inheritance, or a metatable. Data and behavior are separate. For Java, common mistake: reading Musi `class` as an object type by name with constructors and fields. Musi `class` is behavior supplied by instances. Records and data model data.

## When this pays off

Use classes when many types share an operation such as compare, show, step, encode, or measure. The Java habit still helps here: Keep the Java habit of naming APIs for future readers.

## Keep close

- [Generics](/learn/book/types/generics)
- [Classes](/learn/book/abstractions/classes)
- [Laws](/learn/book/abstractions/laws)
