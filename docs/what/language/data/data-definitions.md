---
title: "Data Definitions"
description: "Define record-style and variant-style data with payloads and defaults."
group: "Data"
section: "Data"
order: 15
slug: "data-definitions"
summary: "Use `data` for named forms, variant choices, payload fields, and record defaults."
---
Data definitions describe the forms a value may take. They are useful when a thing has a small set of meaningful forms: a payment can be pending, paid, or failed; a traffic light can be red, yellow, or green.

{{snippet:chapter-data-definitions}}

Each variant is a real case the program must handle. That makes data definitions a good way to remove guesswork from booleans and loose records.

## Naming the cases

A boolean called `active` may hide too many possibilities. A subscription can be trialing, active, paused, cancelled, or expired. Giving each case a name lets pattern matching check that the program considered them.

## Variants can carry details

A failed payment may carry a reason. A delivered package may carry the time it arrived. Put data on the variant that owns it so unrelated cases do not carry empty fields.

Data chapters teach the what a room can be before anyone moves through it. A record is a labeled card, an array is an ordered row, a variant is a set of named doors, and a pattern is a safe way to open one door at a time.

Most data bugs start when one form is asked to mean too many things. If a value can be absent, use an absent-value form. If a value has named parts, use a record. If a value can be one of several cases, use data variants.
