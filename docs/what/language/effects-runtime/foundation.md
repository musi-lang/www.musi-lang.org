---
title: "Foundation"
description: "Separate language foundation from runtime and stdlib layers."
group: "Effects and Runtime"
section: "Effects and Runtime"
order: 28
slug: "foundation"
summary: "Understand what belongs to musi:core before reaching for stdlib modules."
---
The foundation layer contains the small concepts that many other pages rely on: values, names, types, imports, data forms, and asks. It is less like a special feature and more like the floor under the rest of the language.

{{snippet:chapter-foundation}}

When a program feels hard to read, the problem often comes from a weak foundation. Names may be vague, data may be unclear, or outside work may be hidden inside normal helpers.

## Build from stable pieces

Start with values and types that match the real topic. A library card, a parking space, a patient appointment, and a farm animal each deserve names that carry their purpose.

## Connect later pages back here

Functions, records, variants, effects, and packages are not separate tricks. They are different ways to keep the same promise: make the form of the program visible enough that tools and people can reason about it.

Effect chapters draw a line between local calculation and outside answers. Adding prices is local. Reading time, asking a process, or writing a log needs an answer from outside the expression.

A useful test is to ask whether the result could be known from the input alone. If yes, keep the function plain. If no, name the ask and make the effect edge visible.
