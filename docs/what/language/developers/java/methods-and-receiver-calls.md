---
title: "Methods and Receiver Calls"
description: "Read Methods and Receiver Calls as a guide for Java readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Java Developers"
order: 11
slug: "methods-and-receiver-calls"
summary: "Start from Java habits, then use the Musi Book for the full rule."
---

For a Java reader, this guide starts from familiar habits. It shows how Musi handles local values and calls.

{{compare:java-methods-and-receiver-calls}}

## Reading Methods and Receiver Calls from Java

Musi lets a calculation be a `let`, a function, or a final expression without wrapping it in an object first. For a Java reader, the key topic is methods and receiver calls.

## Common mistake

Do not keep extra call steps from Java when the task is methods and receiver calls. Keep one clear call per data step in Musi. In Java, this appears often in methods and receiver calls.

## When this pays off

Use this pattern when a receipt total, label, distance, or score is pure data moving through named calls. The Java habit still helps here: Keep the Java habit of naming APIs for future readers.

## Keep close

- [Calls](/learn/book/core/calls)
- [Dot calls](/learn/book/core/dot-calls)
- [Functions](/learn/book/core/functions)
