---
title: "Shapes"
description: "Start abstraction work with shape named parts alone before given values or laws."
group: "Abstractions"
section: "Abstractions"
order: 21
slug: "shapes"
summary: "Describe shared behavior with shape named parts."
---
Shapes describe capabilities a type can provide. They are useful when several types can answer the same question in their own way: comparing people by age, formatting receipts, or advancing different kinds of counters.

{{snippet:chapter-shapes}}

A shape is not a bag of random helpers. It should name one coherent ability. If the methods do not belong in the same sentence, they probably do not belong in the same shape.

## Capability over category

Think “can be ordered” or “can be shown,” not “all things my app knows about.” A car, a dog, and an appointment may all be printable, but that does not make them the same kind of object.

## Small interfaces age better

A small shape is easier to implement correctly and easier to test. Add methods because the capability needs them, not because a nearby type happens to have them.

Abstraction chapters explain shared behavior. A record says what fields a value has. A shape says what a type can do. A given value gives that behavior for one type. A law names a promise callers depend on.

The common mistake is old object-model words. In Musi it is not an object blueprint. Use records and data for stored data. Use shapes, given values, and laws when many data types need to share behavior.
