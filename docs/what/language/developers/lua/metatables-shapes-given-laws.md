---
title: "Metatables, Shapes, Given Values, and Laws"
description: "Read Metatables, Shapes, Given Values, and Laws as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 10
slug: "metatables-shapes-given-laws"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

Lua tables can be arrays, maps, objects, modules, and namespaces. Musi records narrow that role to field-based data so behavior does not disappear into table convention.

{{compare:lua-metatables-shapes-given-laws}}

## Reading Metatables, Shapes, Given Values, and Laws from Lua

In Musi, records and data variants describe stored data. Behavior belongs in functions or shapes and given values, not inside an object by default. For a Lua reader, the key topic is metatables, shapes, given values, and laws.

## Common mistake

Do not treat shape as stored object data from Lua while reading metatables, shapes, given values, and laws. Start with records or variants for data. In Lua, this appears often in metatables, shapes, given values, and laws.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Records](/learn/book/data/records)
- [Shapes](/learn/book/abstractions/shapes)
- [Patterns](/learn/book/data/patterns)
