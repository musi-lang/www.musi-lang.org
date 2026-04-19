---
title: "Data"
description: "Work with records, arrays, slices, and patterns one step at a time."
group: "Data"
section: "Data"
order: 3
slug: "data"
summary: "Keep data lessons clear by separating records, sequences, and patterns."
---

Data is where programs start to describe the real world. People have names, cars have mileage, payments have states, animals have tags, rooms have bookings, and packages have destinations. Musi gives you several ways to model those forms, and each one answers a different question.

Records are for named fields. Use them when the parts deserve labels, like `street`, `city`, and `postalCode`. Arrays and slices are for ordered collections, like seats in a row or payments on a statement. Data definitions are for meaningful alternatives, like pending, paid, or failed. Patterns are for reading those forms back safely. Option and Result explain the two most common special forms: maybe there is no value, or maybe the work failed with a reason.

This part should make code less vague. A boolean can say whether something is active, but a variant can say whether a subscription is trialing, active, paused, cancelled, or expired. A tuple can hold two values, but a record can say which value is `lowerBound` and which is `upperBound`.

Good data removes guessing from later code. If the data is clear, functions can be shorter. They do not need to check for cases that cannot happen. If the data is vague, every function must protect itself.

Read these chapters with everyday examples in mind. A lost-and-found desk, a school list, a pet shelter, a delivery route, and a family calendar all need different data. Musi features help keep that data clear.
