---
title: "Testing and Tools"
description: "Read Testing and Tools as a guide for Lua readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Lua Developers"
order: 13
slug: "testing-tooling"
summary: "Start from Lua habits, then use the Musi Book for the full rule."
---

For a Lua reader, this guide starts from familiar habits. It shows how Musi handles tests as what the program should dos.

{{compare:lua-testing-tooling}}

## Reading Testing and Tools from Lua

In Musi, tests should state the what the program should do first, then check the function or value that proves it. For a Lua reader, the key topic is testing and tools.

## Common mistake

Do not write a test that only proves syntax can be called. Make the receipt, route, badge, or parser claim visible. In Lua, this appears often in testing and tools.

## When this pays off

Use this style when a future reader needs to know which behavior broke, not only which line failed. The Lua habit still helps here: Keep the Lua habit of using small names and simple values.

## Keep close

- [Testing](/learn/book/advanced/testing)
- [Running and tools](/learn/book/advanced/running-and-tooling)
- [Packages](/learn/book/organization/packages)
