---
title: "Exceptions and Effects"
description: "Read Exceptions and Effects as a guide for Java readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Java Developers"
order: 8
slug: "exceptions-effects"
summary: "Start from Java habits, then use the Musi Book for the full rule."
---

Java exceptions and services can make outside work appear as a normal method call. Musi effect code marks the ask so runtime edges stay visible.

{{compare:java-exceptions-effects}}

## Reading Exceptions and Effects from Java

Musi names outside work with effects and `ask`, instead of hiding time, files, console work, or services inside a normal call. For a Java reader, the key topic is exceptions and effects.

## Common mistake

Do not make an effect look pure. A clock, process, network service, or console changes the trust edge. In Java, this appears often in exceptions and effects.

## When this pays off

Use effects when the program asks the runtime, OS, user, or another service for an answer. The Java habit still helps here: Keep the Java habit of naming APIs for future readers.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Requirements](/learn/book/effects-runtime/requirements)
- [Handlers](/learn/book/effects-runtime/handlers)
