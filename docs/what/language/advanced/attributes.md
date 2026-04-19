---
title: "Attributes"
description: "Use attributes to attach extra data for known by the compiler items, layout, foreign links, error messages, and lifecycle information."
group: "Advanced and Tools"
section: "Advanced and Tools"
order: 30
slug: "attributes"
summary: "Attributes describe extra data, edges, and build-time intent without changing Musi into a macro language."
---
Attributes attach extra information to named parts. They are useful when tools, generated code, foreign edges, or known built-ins need extra data that is not part of the normal value expression.

{{snippet:chapter-attributes}}

An attribute should be treated like a label on a file folder. It helps a tool handle the named part correctly, but it should not become a secret second language for normal program logic.

## Extra data with a job

Use attributes for facts a compiler, format tool, runtime bridge, or documentation tool must know. If the fact is normal app data, put it in a value instead.

## Keep labels rare

Too many attributes make code feel like a form full of stamps. Prefer normal named parts unless the extra data changes how tools must treat the named part.

Advanced chapters are for special cases: extra data, native calls, compile-time work, syntax values, and command-line use. Use them when normal named parts are not enough.

Use advanced forms only when a tool, runtime, foreign library, or build step needs them. Keep normal program logic in normal named parts.
