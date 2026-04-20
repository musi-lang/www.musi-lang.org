---
title: "Metatables, Classes, Instances, and Laws"
description: "Read Metatables, Classes, Instances, and Laws as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 10
slug: "metatables-classes-instances-laws"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

Lua tables can be arrays, maps, objects, modules, and namespaces. Musi records narrow that role to field-based data so behavior does not disappear into table convention.

{{compare:lua-metatables-classes-instances-laws}}

## Reading Metatables, Classes, Instances, and Laws from Lua

In Musi, records and data variants describe stored data. Behavior belongs in functions or classes/instances, not inside an object by default. For a Lua reader, the key topic is metatables, classes, instances, and laws.

## Common mistake

Do not treat class as stored object data from Lua while reading metatables, classes, instances, and laws. Start with records or variants for data. In Lua, this appears often in metatables, classes, instances, and laws.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Records](/learn/book/data/records)
- [Classes](/learn/book/abstractions/classes)
- [Patterns](/learn/book/data/patterns)
