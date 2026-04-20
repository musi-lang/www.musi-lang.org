---
title: "Records, Structs, and Field Updates"
description: "Read Records, Structs, and Field Updates as a guide for Rust readers, with links to the Musi Book rule."
group: "Musi for Developers"
section: "Rust Developers"
order: 4
slug: "records-structs"
summary: "Start from Rust habits, then use the Musi Book for the full rule."
---

For a Rust reader, this guide starts from familiar habits. It shows how Musi handles field-based data.

{{compare:rust-records-structs}}

## Reading Records, Structs, and Field Updates from Rust

In Musi, records and data variants describe stored data. Behavior belongs in functions or classes/instances, not inside an object by default. For a Rust reader, the key topic is records, structs, and field updates.

## Common mistake

Do not treat class as stored object data from Rust while reading records, structs, and field updates. Start with records or variants for data. In Rust, this appears often in records, structs, and field updates.

## When this pays off

Use records when names like `owner`, `age`, `amount`, or `route` are the point of the value. The Rust habit still helps here: Keep the Rust habit of asking which type carries the invariant.

## Keep close

- [Records](/learn/book/data/records)
- [Classes](/learn/book/abstractions/classes)
- [Patterns](/learn/book/data/patterns)
