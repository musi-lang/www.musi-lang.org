---
title: "Unsafe and FFI"
description: "Use unsafe blocks and @std/ffi when Musi code crosses raw native edges."
group: "Advanced and Tools"
section: "Advanced and Tools"
order: 32
slug: "unsafe-and-ffi"
summary: "Keep raw pointer and native-call work behind a visible unsafe edge."
---
Unsafe and FFI code is where Musi talks to places the compiler cannot fully protect. It is necessary for some systems work, but it should be narrow and clear.

{{snippet:chapter-unsafe-and-ffi}}

The best unsafe edge is small, named, and wrapped by safe code. Most of the package should not know the edge exists.

## Put danger behind a counter

Like a workshop tool with a guard, unsafe code belongs in a controlled area. Check inputs before crossing the edge and return typed results after crossing back.

## Document the contract in code form

Use precise names and types so the contract is visible. If a pointer must be non-null or a buffer length must match, make the wrapper express that requirement.

Advanced chapters are for special cases: extra data, native calls, compile-time work, syntax values, and command-line use. Use them when normal named parts are not enough.

Use advanced forms only when a tool, runtime, foreign library, or build step needs them. Keep normal program logic in normal named parts.
