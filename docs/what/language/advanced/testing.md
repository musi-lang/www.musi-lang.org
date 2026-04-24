---
title: "Testing"
description: "Teach tests before the wider command area so the workflow stays concrete."
group: "Advanced and Tools"
section: "Advanced and Tools"
order: 33
slug: "testing"
summary: "Write small package tests that read like normal code."
---
Tests describe examples the program must continue to satisfy. A good test reads like a small story: given this cart, the total is this; given this animal age, the category is this.

{{snippet:chapter-testing}}

Tests are not separate from design. Code that is hard to test often has hidden edges, vague names, or too many responsibilities in one function.

## Test the rule, not the machinery

If a rule calculates late fees, test the dates and expected fee. Do not make the test depend on today's clock unless the clock behavior itself is the subject.

## Use real examples with small numbers

Everyday examples make failures easier to understand. A failed test about two tickets and one discount is easier to debug than a test full of anonymous placeholders.

Advanced chapters are for special cases: extra data, native calls, compile-time work, syntax values, and command-line use. Use them when normal named parts are not enough.

Use advanced forms only when a tool, runtime, native library, or build step needs them. Keep normal program logic in normal named parts.
