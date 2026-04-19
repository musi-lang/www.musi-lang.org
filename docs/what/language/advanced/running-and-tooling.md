---
title: "Running and Tools"
description: "Bring the learning path back to commands and workflow once language basics are in place."
group: "Advanced and Tools"
section: "Advanced and Tools"
order: 34
slug: "running-and-tooling"
summary: "Finish with the everyday command flow for checking, running, and building code."
---
Running and tools are how source code becomes daily work. The format tool, language server, tests, build commands, and package extra data should agree with each other.

{{snippet:chapter-running-and-tooling}}

Good tools behavior is predictable. Formatting a file in the editor should match formatting it from the command line. Error messages should point at the same source the compiler reads.

## Editor and command line should match

A teammate using VS Code and a teammate using a terminal should not get different source forms. Put shared behavior in project configuration rather than personal editor settings.

## Tight loops win

Use the smallest command that answers the current question. Run a file while learning, run tests when changing behavior, run the full build before shipping.

Project tools should also be boring in review. If formatting, generated docs, or package checks require a special local ritual, put that ritual in a script or Makefile target. The less a contributor has to remember, the more likely the project stays consistent.

Advanced chapters are for special cases: extra data, native calls, compile-time work, syntax values, and command-line use. Use them when normal named parts are not enough.

Use advanced forms only when a tool, runtime, foreign library, or build step needs them. Keep normal program logic in normal named parts.
