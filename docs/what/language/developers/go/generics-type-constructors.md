---
title: "Generics and Type Constructors"
description: "Read Generics and Type Constructors as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 11
slug: "generics-type-constructors"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

For a Go reader, this guide starts from familiar habits. It shows how Musi handles field-based data.

{{compare:go-generics-type-constructors}}

## Reading Generics and Type Constructors from Go

In Musi, records and data variants describe stored data. Behavior belongs in functions or classes/instances, not inside an object by default. For a Go reader, the key topic is generics and type constructors.

## Common mistake

Do not read `class` as object data. If the page is about a pet, invoice, room, or vehicle, start with fields or variants. For Go, common mistake: using absence or failure as a hidden path because Go makes that cheap. Musi `class` is closer to an interface rule with instances. It is not a struct. It is not a method set from package convention.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Generics](/learn/book/types/generics)
- [Classes](/learn/book/abstractions/classes)
- [Laws](/learn/book/abstractions/laws)
