---
title: "Laws"
description: "Add meaning expectations after shape and given value basics."
group: "Abstractions"
section: "Abstractions"
order: 23
slug: "laws"
summary: "Use laws to document the meaning of an abstraction, not just its form."
---
Laws state expectations that given values should obey. They are like the rules of a board game: each player may have a different strategy, but the moves still have to follow the same rules.

{{snippet:chapter-laws}}

Laws help readers trust generic code. If equality says two receipts are the same, a law can require that each receipt equals itself. If ordering compares values, laws can rule out impossible cycles.

## What laws buy you

Generic functions often rely on behavior they cannot see. A sorting function trusts that comparison is consistent. A set trusts that equality is stable. Laws write those expectations down.

## Write laws as plain rules

A good law is small and checkable. It should describe one property of the shape, not retell the whole shape design.

Abstraction chapters explain shared behavior. A record says what fields a value has. A shape says what a type can do. A given value gives that behavior for one type. A law names a promise callers depend on.

The common mistake is old object-model words. In Musi it is not an object blueprint. Use records and data for stored data. Use shapes, given values, and laws when many data types need to share behavior.
