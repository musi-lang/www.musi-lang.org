---
title: "Goroutines, Channels, Context, and Effects"
description: "Read Goroutines, Channels, Context, and Effects as a guide for Go readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Go Developers"
order: 9
slug: "goroutines-channels-context-effects"
summary: "Start from Go habits, then use the Musi Book for the full rule."
---

Go makes concurrency clear with goroutines, channels, and contexts. Musi effect pages are about a different explicitness: naming the ask for outside work before deciding how it is handled.

{{compare:go-goroutines-channels-context-effects}}

## Reading Goroutines, Channels, Context, and Effects from Go

Musi names outside work with effects and `ask`, instead of hiding time, files, console work, or services inside a normal call. For a Go reader, the key topic is goroutines, channels, context, and effects.

## Common mistake

Do not make an effect look pure. A clock, process, network service, or console changes the trust edge. In Go, this appears often in goroutines, channels, context, and effects.

## When this pays off

Use effects when the program asks the runtime, OS, user, or another service for an answer. The Go habit still helps here: Keep the Go habit of writing the small thing first and naming package edges clearly.

## Keep close

- [Effects](/learn/book/effects-runtime/effects)
- [Requirements](/learn/book/effects-runtime/requirements)
- [Handlers](/learn/book/effects-runtime/handlers)
