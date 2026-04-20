---
title: "Methods and Receiver Calls"
description: "Read Methods and Receiver Calls as a guide for C++ readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C++ Developers"
order: 11
slug: "methods-and-receiver-calls"
summary: "Start from C++ habits, then use the Musi Book for the full rule."
---

For a C++ reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:cpp17-methods-and-receiver-calls}}

## Reading Methods and Receiver Calls from C++17

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a C++ reader, the key topic is methods and receiver calls.

## Common mistake

Do not keep extra call steps from C++ when the task is methods and receiver calls. Keep one clear call per data step in Musi. In C++, this appears often in methods and receiver calls.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The C++17 habit still helps here: Keep the C++ habit of asking which operation is generic and which value owns the data.

## Keep close

- [Calls](/learn/book/core/calls)
- [Dot calls](/learn/book/core/dot-calls)
- [Functions](/learn/book/core/functions)
