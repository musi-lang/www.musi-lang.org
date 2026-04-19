---
title: "Errors, Results, and Effects"
description: "Read Errors, Results, and Effects as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 8
slug: "errors-results-effects"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

Go readers are used to checking nil and a second return value. Musi turns the normal missing branch into Option so the caller cannot forget the check after a lookup.

{{compare:go-errors-results-effects}}

## Reading Errors, Results, and Effects from Go

Musi uses `option.someOf` and `option.noneOf` when absence is expected, so callers handle the empty branch deliberately. For a Go reader, the key topic is errors, results, and effects.

## Common mistake

Do not translate null, nil, None, or undefined as a quiet normal value. For Go, common mistake: using absence or failure as a hidden path because Go makes that cheap. Musi `class` is closer to an interface rule with instances. It is not a struct. It is not a method set from package convention.

## When this pays off

Use Option when a badge, ticket, receipt, search result, or lookup may honestly be missing. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Using](/learn/book/effects-runtime/using)
- [Handlers](/learn/book/effects-runtime/handlers)
