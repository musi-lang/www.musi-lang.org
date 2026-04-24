---
title: "Given Values"
description: "Learn given values only after shapes make sense on their own."
group: "Abstractions"
section: "Abstractions"
order: 22
slug: "given-values"
summary: "Attach concrete behavior to concrete types."
---
Given values connect a shape to a specific type. If a shape says “this kind of value can be compared,” a given value explains how `Int`, `Person`, or `DeliveryTime` performs that comparison.

{{snippet:chapter-given-values}}

Given values are where app rules become concrete. Comparing people by name is different from comparing them by age. Comparing orders by creation time is different from comparing them by total price.

## Choose the rule deliberately

Do not hide surprising policy in a given value. If there are several reasonable orderings for a type, name the one you are using or make the choice clear at the call site.

## Keep code boring

A given value should mostly translate the shape operation into the type's own fields and helpers. If it starts coordinating unrelated services, the abstraction edge is in the wrong place.

Abstraction chapters explain shared behavior. A record says what fields a value has. A shape says what a type can do. A given value gives that behavior for one type. A law names a promise callers depend on.

The common mistake is old object-model words. In Musi it is not an object blueprint. Use records and data for stored data. Use shapes, given values, and laws when many data types need to share behavior.
