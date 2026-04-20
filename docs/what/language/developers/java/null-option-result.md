---
title: "Null, Option, and Result"
description: "Read Null, Option, and Result as a guide for Java readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Java Developers"
order: 7
slug: "null-option-result"
summary: "Start from Java habits, then use the Musi Book for the full rule."
---

For a Java reader, this guide starts from familiar habits. It shows how Musi handles absence and failure branches.

{{compare:java-null-option-result}}

## Reading Null, Option, and Result from Java

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a Java reader, the key topic is null, option, and result.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. In Java, this appears often in null, option, and result.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The Java habit still helps here: Keep the Java habit of naming APIs for future readers.

## Keep close

- [Data definitions](/learn/book/data/data-definitions)
- [Patterns](/learn/book/data/patterns)
- [Effects](/learn/book/effects-runtime/effects)
