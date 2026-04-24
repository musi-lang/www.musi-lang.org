---
title: "Interfaces, Shapes, Given Values, and Laws"
description: "Read Interfaces, Shapes, Given Values, and Laws as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 10
slug: "interfaces-shapes-laws"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

Go interfaces are satisfied implicitly by method sets. Musi shapes are clear behavior requirements, and given values are the visible evidence that a type supplies the operation.

{{compare:go-interfaces-shapes-laws}}

## Reading Interfaces, Shapes, Given Values, and Laws from Go

In Musi, shapes name behavior a type can provide, given values provide it, and laws document promises callers rely on. For a Go reader, the key topic is interfaces, shapes, given values, and laws.

## Common mistake

Do not confuse a Musi shape with stored object state, inheritance, or a metatable. Data and behavior are separate. In Go, this appears often in interfaces, shapes, given values, and laws.

## When this pays off

Use shapes when many types share an operation such as compare, show, step, encode, or measure. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Shapes](/learn/book/abstractions/shapes)
- [Instances](/learn/book/abstractions/given-values)
- [Laws](/learn/book/abstractions/laws)
