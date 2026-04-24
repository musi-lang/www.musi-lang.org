---
title: "Abstractions"
description: "Learn shapes, given values, and laws without object-model confusion."
group: "Abstractions"
section: "Abstractions"
order: 6
slug: "abstractions"
summary: "Separate behavior, code, and laws into clear chapters."
---

Abstractions are where Musi talks about shared behavior. A shape describes a capability, a given value gives that capability to a specific type, and a law records the rules that code should obey.

This is easier to learn with normal examples. Several values can be compared: ages, delivery times, invoice totals, and priority levels. Several values can be shown as text: people, animals, tickets, and receipts. The shared behavior is real, even though each type stores different fields.

A shape should name one coherent ability. If the methods do not belong in the same sentence, the shape is probably too large. A given value should make one type satisfy that ability without smuggling in unrelated policy. A law should state a small rule that generic code can rely on.

Think of laws like the rules of a board game. Different players can choose different moves, but every move must still obey the game. Generic code has the same need. A sorting helper can work across many types only if comparison behaves consistently.

By the end of this part, you should be able to separate three questions: what behavior is required, how this type provides it, and what promises must remain true for generic code to trust it.
