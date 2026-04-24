---
title: "Tuples and Unit"
description: "Group values by position and recognize the empty value."
group: "Core Syntax"
section: "Core Syntax"
order: 7
slug: "tuples-and-unit"
summary: "Use tuple expressions for small positional groups and unit when no payload matters."
---
Tuples group a few values by position. Unit represents the single value used when the result itself carries no information.

{{snippet:chapter-tuples-and-unit}}

Use a tuple when the grouped values stay close to the code and the order is clear. Coordinates, paired names, and short internal results can fit well. Use a record when the fields deserve names.

## Position versus field name

`(left, right)` is fine when the pair lives near the code that creates it. A customer address should not be a long tuple; the fields need names because the reader must know which part is street, city, or postal code.

## Unit in everyday terms

Unit is like a signed delivery receipt that says the action happened, not a box of new data. Printing a line or sending an ask may return unit because the important result is outside the value.

Core forms are the basic parts of the language. Literals are values, calls ask for work, operators join values, ranges mark spans, and lambdas carry a small action. Learn each form before using it in larger data or effect code.

When a core form feels hard, use a simple example. Try a ticket price plus a fee, a room number in a range, a message sent through a callable, or a small action saved as a lambda. The syntax keeps that example exact.
