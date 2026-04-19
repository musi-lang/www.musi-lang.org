---
title: "Advanced and Tooling"
description: "Finish with attributes, foreign bindings, quote, testing, and tool workflow."
group: "Advanced and Tooling"
section: "Advanced and Tooling"
order: 8
slug: "advanced"
summary: "Keep sharp or advanced topics late, after normal code already feels natural."
---

Advanced and Tooling comes after normal Musi code feels readable. These chapters cover sharp edges and project-scale support: attributes, foreign named parts, unsafe and FFI edges, operators, quote and syntax tools, compile-time work, templates, testing, and command workflow.

The common theme is edge control. Attributes add extra data for tools. Foreign named parts describe symbols outside normal Musi source. Unsafe and FFI code crosses places the compiler cannot fully protect. Quote, syntax, templates, and splices let code talk about code. Testing and tools keep those choices repeatable.

Do not read this part as a bag of clever tricks. Each feature should solve a concrete maintenance problem. A foreign wrapper can isolate a native call. A template can remove regular boilerplate. A test can freeze an important behavior. A Makefile or package script can make the same command work for every contributor.

A good advanced feature leaves the resulting code easier to inspect. If a template makes error messages confusing, the template is too clever. If an attribute hides normal app policy, the policy belongs in a value or type. If unsafe code spreads through the package, it needs a smaller wrapper.

By the end, you should know when to stay with normal code and when an advanced edge earns its place.
