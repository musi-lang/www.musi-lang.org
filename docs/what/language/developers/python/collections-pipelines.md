---
title: "Collections and Pipelines"
description: "Read Collections and Pipelines as a guide for Python readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Python Developers"
order: 6
slug: "collections-pipelines"
summary: "Start from Python habits, then use the Musi Book for the full rule."
---

For a Python reader, this guide starts from familiar habits. It shows how Musi handles lists, slices, maps, and pipelines.

{{compare:python-collections-pipelines}}

## Reading Collections and Pipelines from Python

In Musi, collection examples keep indexing, field access, and pipelines clear so a reader can see where each value comes from. For a Python reader, the key topic is collections and pipelines.

## Common mistake

Do not import lazy iterators, stream chains, table conventions, or pointer arithmetic unless the Musi example needs that behavior. For Python, common mistake: trusting runtime convention where Musi expects a visible type or effect. Musi `class` is closer to a clear protocol than a Python class with attributes and methods.

## When this pays off

Use this pattern for prices, stops, animals, files, and other small batches where each step has a name. The Python habit still helps here: Keep the Python habit of naming the real-world thing first.

## Keep close

- [Arrays and slices](/learn/book/data/arrays-and-slices)
- [Records](/learn/book/data/records)
- [Dot calls](/learn/book/core/dot-calls)
