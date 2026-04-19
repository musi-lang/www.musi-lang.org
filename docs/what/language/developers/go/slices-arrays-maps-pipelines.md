---
title: "Slices, Arrays, Maps, and Pipelines"
description: "Read Slices, Arrays, Maps, and Pipelines as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 6
slug: "slices-arrays-maps-pipelines"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

For a Go reader, this guide starts from familiar habits. It shows how Musi handles lists, slices, maps, and pipelines.

{{compare:go-slices-arrays-maps-pipelines}}

## Reading Slices, Arrays, Maps, and Pipelines from Go

In Musi, collection examples keep indexing, field access, and pipelines clear so a reader can see where each value comes from. For a Go reader, the key topic is slices, arrays, maps, and pipelines.

## Common mistake

Do not import lazy iterators, stream chains, table conventions, or pointer arithmetic unless the Musi example needs that behavior. For Go, common mistake: using absence or failure as a hidden path because Go makes that cheap. Musi `class` is closer to an interface rule with instances. It is not a struct. It is not a method set from package convention.

## When this pays off

Use this pattern for prices, stops, animals, files, and other small batches where each step has a name. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Arrays and slices](/learn/book/data/arrays-and-slices)
- [Records](/learn/book/data/records)
- [Dot calls](/learn/book/core/dot-calls)
