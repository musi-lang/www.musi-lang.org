---
title: "Extension Methods and Calls"
description: "Read Extension Methods and Calls as a guide for C# readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "C# Developers"
order: 11
slug: "extension-methods-and-calls"
summary: "Start from C# habits, then use the Musi Book for the full rule."
---

For a C# reader, this guide starts from familiar C# and CLR habits. It shows how Musi handles local values and calls.

{{compare:csharp-extension-methods-and-calls}}

## Reading Extension Methods and Calls from C#

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a C# reader, the key topic is extension methods and calls.

## Common mistake

Do not keep extra call steps from C# when the task is extension methods and calls. Keep one clear call per data step in Musi. In C#, this appears often in extension methods and calls.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The C# habit still helps here: Keep the C# habit of making API calls easy to read.

## Keep close

- [Calls](/learn/book/core/calls)
- [Dot calls](/learn/book/core/dot-calls)
- [Functions](/learn/book/core/functions)
