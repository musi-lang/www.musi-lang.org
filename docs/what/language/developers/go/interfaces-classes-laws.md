---
title: "Interfaces, Classes, Instances, and Laws"
description: "Read Interfaces, Classes, Instances, and Laws as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 10
slug: "interfaces-classes-laws"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

Go interfaces are satisfied implicitly by method sets. Musi classes are clear behavior requirements, and instances are the visible evidence that a type supplies the operation.

{{compare:go-interfaces-classes-laws}}

## Reading Interfaces, Classes, Instances, and Laws from Go

In Musi, classes name behavior a type can provide, instances provide it, and laws document promises callers rely on. For a Go reader, the key topic is interfaces, classes, instances, and laws.

## Common mistake

Do not confuse a Musi class with stored object state, inheritance, or a metatable. Data and behavior are separate. In Go, this appears often in interfaces, classes, instances, and laws.

## When this pays off

Use classes when many types share an operation such as compare, show, step, encode, or measure. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Classes](/learn/book/abstractions/classes)
- [Instances](/learn/book/abstractions/instances)
- [Laws](/learn/book/abstractions/laws)
