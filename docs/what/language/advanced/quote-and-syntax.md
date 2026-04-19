---
title: "Quote and Syntax"
description: "Introduce quote and syntax work late so beginners are not overloaded too early."
group: "Advanced and Tools"
section: "Advanced and Tools"
order: 32
slug: "quote-and-syntax"
summary: "Treat code as data only after normal code reading feels natural."
---
Quote and syntax features let code talk about code as data. They are useful for tools, templates, generated named parts, and compile-time transformations.

{{snippet:chapter-quote-and-syntax}}

This is powerful because the program can inspect or build structure that normally belongs to source text. It is also easy to overuse.

## Use syntax values for tool-made code

Code generation, lint-like checks, and named part templates are good fits. A normal receipt calculation or animal-name format tool should stay normal code.

## Generated code should still feel authored

If a template produces named parts, those named parts should be names a person would have written. Tools should help the reader, not bury intent behind syntax tricks.

A good test for quoted syntax is whether the generated code could be explained to a teammate without mentioning the generator first. If the useful result is “a handler for each payment event,” the generated named parts should show those handlers plainly. The quote is the workshop; the resulting code is what people maintain.

Advanced chapters are for special cases: extra data, native calls, compile-time work, syntax values, and command-line use. Use them when normal named parts are not enough.

Use advanced forms only when a tool, runtime, foreign library, or build step needs them. Keep normal program logic in normal named parts.
