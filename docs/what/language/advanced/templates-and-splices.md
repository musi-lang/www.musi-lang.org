---
title: "Templates and Splices"
description: "Build text with interpolation and understand splice syntax near quote forms."
group: "Advanced and Tools"
section: "Advanced and Tools"
order: 34
slug: "templates-and-splices"
summary: "Use template literals for interpolated text and splice forms when building syntax."
---
Templates and splices help generate repeated code from a smaller pattern. They are useful when many named parts share the same structure but differ in a few names or types.

{{snippet:chapter-templates-and-splices}}

Think of a template like a form letter. It saves time only if the shared form is real. If every filled-in copy needs special exceptions, write the named parts directly.

## Repetition versus regularity

Repeated code is not always a problem. Regular repeated code can be generated safely. Irregular repeated code is often clearer when written out.

## Review the result

Generated named parts should be easy to inspect. If the splice makes format tool output, error messages, or editor highlighting confusing, the template is doing too much.

Templates work best for regular families: one operation per field, one wrapper per foreign symbol, or one test case per known example. They work poorly when each generated piece immediately needs hand-written exceptions. In that case the repetition is telling you about missing design, not missing automation.

Advanced chapters are for special cases: extra data, native calls, compile-time work, syntax values, and command-line use. Use them when normal named parts are not enough.

Use advanced forms only when a tool, runtime, foreign library, or build step needs them. Keep normal program logic in normal named parts.
