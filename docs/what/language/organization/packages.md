---
title: "Packages"
description: "Learn package roots and entry files after single-file work makes sense."
group: "Code Organization"
section: "Code Organization"
order: 16
slug: "packages"
summary: "Move from one file to package-managed code without changing mental models."
---
A package is where files, imports, tests, and configuration agree on one project. It is the difference between a single recipe card and a small cookbook with chapters.

{{snippet:chapter-packages}}

Use packages when code has a name, a set of source files, and repeatable commands. The package file keeps that information in one place so editors, format tools, tests, and command-line tools do not guess differently.

## What belongs together

Put files in the same package when they ship and change together. A restaurant app can keep menu, order, and receipt code together. A reusable date library should not live inside that app if other projects will use it.

## Configuration is part of the contract

Formatter width, source roots, and package extra data affect how the project is read. Keeping those values in the package makes behavior predictable outside one developer's editor.

Organization chapters explain where code lives. Packages group files, imports bring names in, and exports let other code use names.

Messy organization starts when every file reaches for every name. Keep imports narrow, export only the names another file needs, and let file names explain the job before a reader opens them.
