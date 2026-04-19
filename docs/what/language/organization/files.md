---
title: "Files"
description: "Separate file reading from package structure to reduce beginner overload."
group: "Code Organization"
section: "Code Organization"
order: 15
slug: "files"
summary: "Know what a single file means before building a package."
---
Files are the first edge a reader sees. A good file has one main reason to exist: payment totals, animal records, calendar rules, or command-line entry points.

{{snippet:chapter-files}}

Keep related named parts together and move unrelated ones apart. A file that contains car maintenance rules and user-login code will confuse both readers and tools.

## File names as signs

Name files like signs in a building. A person should know which door to open before reading every named part inside. `invoice.ms`, `address.ms`, and `runtime.ms` each promise a different topic.

## Private helpers stay nearby

If a helper only serves one exported named part, keep it close. If several files need it, move it behind a small exported API instead of copying the helper around the package.

Organization chapters explain where code lives. Packages group files, imports bring names in, and exports let other code use names.

Messy organization starts when every file reaches for every name. Keep imports narrow, export only the names another file needs, and let file names explain the job before a reader opens them.
