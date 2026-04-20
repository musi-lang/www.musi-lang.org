---
title: "Arrays, Sequences, Maps, and Pipelines"
description: "Read Arrays, Sequences, Maps, and Pipelines as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 6
slug: "arrays-sequences-maps-pipelines"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

For a Lua reader, this guide starts from familiar habits. It shows how Musi handles lists, slices, maps, and pipelines.

{{compare:lua-arrays-sequences-maps-pipelines}}

## Reading Arrays, Sequences, Maps, and Pipelines from Lua

In Musi, collection examples keep indexing, field access, and pipelines clear so a reader can see where each value comes from. For a Lua reader, the key topic is arrays, sequences, maps, and pipelines.

## Common mistake

Do not import lazy iterators, stream chains, table conventions, or pointer arithmetic unless the Musi example needs that behavior. In Lua, this appears often in arrays, sequences, maps, and pipelines.

## When this pays off

Use this pattern for prices, stops, animals, files, and other small batches where each step has a name. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Arrays and slices](/learn/book/data/arrays-and-slices)
- [Records](/learn/book/data/records)
- [Dot calls](/learn/book/core/dot-calls)
