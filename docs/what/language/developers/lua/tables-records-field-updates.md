---
title: "Tables, Records, and Field Updates"
description: "Read Tables, Records, and Field Updates as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 5
slug: "tables-records-field-updates"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

Lua tables can be arrays, maps, objects, modules, and namespaces. Musi records narrow that role to field-based data so behavior does not disappear into table convention.

{{compare:lua-tables-records-field-updates}}

## Reading Tables, Records, and Field Updates from Lua

In Musi, records and data variants describe stored data. Behavior belongs in functions or classes/instances, not inside an object by default. For a Lua reader, the key topic is tables, records, and field updates.

## Common mistake

Do not read `class` as object data. If the page is about a pet, invoice, room, or vehicle, start with fields or variants. For Lua, common mistake: letting table fields, missing fields, and behavior conventions blur together. Musi `class` is not a metatable pattern; records and data hold table-like data, classes/instances name promised behavior.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Records](/learn/book/data/records)
- [Classes](/learn/book/abstractions/classes)
- [Patterns](/learn/book/data/patterns)
