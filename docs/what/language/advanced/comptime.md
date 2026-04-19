---
title: "Comptime"
description: "Run selected Musi expressions during compilation and use the result as a first-class value."
group: "Advanced and Tools"
section: "Advanced and Tools"
order: 33
slug: "comptime"
summary: "Use value-position comptime for constants, specialization, and generated syntax."
---
Compile-time code runs while the program is being prepared, not while the user is running it. It is useful for generating repetitive structure, checking facts early, or specializing code from known information.

{{snippet:chapter-comptime}}

Use compile-time work when it removes real repetition or catches real mistakes. Do not use it to hide simple code behind machinery.

## The bakery rule

If runtime is serving customers, compile time is preparing trays before the doors open. It can label pastries and arrange shelves, but it should not depend on which customer walks in next.

## Keep generated codes readable

Generated named parts should still look like normal named parts when inspected. If a reader cannot understand what compile-time code produced, error messages and reviews become harder.

Advanced chapters are for special cases: extra data, native calls, compile-time work, syntax values, and command-line use. Use them when normal named parts are not enough.

Use advanced forms only when a tool, runtime, foreign library, or build step needs them. Keep normal program logic in normal named parts.
