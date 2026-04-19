---
title: "Functions"
description: "Define reusable functions, learn named arguments, and understand why parameter names matter."
group: "Core Syntax"
section: "Core Syntax"
order: 9
slug: "functions"
summary: "Functions are normal `let` bindings with parameters, result types, and expression bodies."
---
Functions turn a question into a reusable action. Instead of writing the same price calculation in three checkout screens, name it once and call it wherever a cart needs a total.

{{snippet:chapter-functions}}

Parameters describe what the function needs from the outside world. The return type describes what it promises to give back. That promise matters more than the function body when another file calls it.

## Choosing a function edge

Make a function when a few lines have a name in normal speech. `totalInvoice`, `isWeekend`, and `formatAnimalTag` are good signals. If the best name is vague, the function probably contains more than one idea.

## Small promises compose

A large process becomes readable when each function keeps a small promise. A booking flow can check the date, choose a room, compute the price, and build a confirmation. Each function can be tested and replaced without rewriting the whole flow.

Core forms are the basic parts of the language. Literals are values, calls ask for work, operators join values, ranges mark spans, and lambdas carry a small action. Learn each form before using it in larger data or effect code.

When a core form feels hard, use a simple example. Try a ticket price plus a fee, a room number in a range, a message sent through a callable, or a small action saved as a lambda. The syntax keeps that example exact.
