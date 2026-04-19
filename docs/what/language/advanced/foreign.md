---
title: "Foreign"
description: "Keep foreign named parts separate from general attributes so edge thinking stays clear."
group: "Advanced and Tools"
section: "Advanced and Tools"
order: 31
slug: "foreign"
summary: "Declare foreign bindings at the runtime edge, not inside normal app code."
---
Foreign named parts describe things that live outside normal Musi source. They are useful when code must call into a host library, runtime symbol, or external system edge.

{{snippet:chapter-foreign}}

Treat foreign edges with care. The compiler has less information there, so names, types, and attributes need to be especially honest.

## Adapters protect the rest of the program

Put foreign calls behind small Musi wrappers. A weather app can call a native API at the edge, then return a normal record to the rest of the package.

## Keep uncertainty contained

If the foreign side can fail, return a form that says so. Do not let low-level uncertainty leak through every app function.

Foreign names also deserve extra care because editor tools cannot infer intent from the other language. A short wrapper can turn `native_read_file` into a Musi function that returns text or a typed failure. After that point, the rest of the program reads like normal Musi again.

Advanced chapters are for special cases: extra data, native calls, compile-time work, syntax values, and command-line use. Use them when normal named parts are not enough.

Use advanced forms only when a tool, runtime, foreign library, or build step needs them. Keep normal program logic in normal named parts.
