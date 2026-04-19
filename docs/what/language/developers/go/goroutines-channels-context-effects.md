---
title: "Goroutines, Channels, Context, and Effects"
description: "Read Goroutines, Channels, Context, and Effects as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 9
slug: "goroutines-channels-context-effects"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

Go makes concurrency clear with goroutines, channels, and contexts. Musi effect pages are about a different explicitness: naming the request for outside work before deciding how it is handled.

{{compare:go-goroutines-channels-context-effects}}

## Reading Goroutines, Channels, Context, and Effects from Go

Musi names outside work with effects and `request`, instead of hiding time, files, console work, or services inside a normal call. For a Go reader, the key topic is goroutines, channels, context, and effects.

## Common mistake

Do not make an effect look pure. A clock, process, network service, or console changes the trust edge. For Go, common mistake: using absence or failure as a hidden path because Go makes that cheap. Musi `class` is closer to an interface rule with instances. It is not a struct. It is not a method set from package convention.

## When this pays off

Use effects when the program asks the runtime, OS, user, or another service for an answer. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Using](/learn/book/effects-runtime/using)
- [Handlers](/learn/book/effects-runtime/handlers)
