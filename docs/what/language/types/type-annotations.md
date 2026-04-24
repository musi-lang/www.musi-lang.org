---
title: "Type Annotations"
description: "Use `:` for annotations, `where` for rules, and constructor-style payloads for variants without mixing them up."
group: "Types"
section: "Types"
order: 17
slug: "type-annotations"
summary: "Learn the visible edge markers for values, rules, callable types, and data variants."
---
Type annotations make a promise visible. They tell the compiler and the reader what kind of value a name, parameter, or result is expected to have.

{{snippet:chapter-type-annotations}}

Annotations are useful at edges: exported functions, effect operations, shape members, and places where inference would be correct but not obvious to a human.

## Public code should speak clearly

If another file calls a function, its inputs and result should be easy to see without opening the body. A delivery estimator that accepts a `Package` and returns a `Money` value should say so at the named part.

## Local code can stay lighter

Inside a small block, inference can keep code calm. If the value is created and used nearby, a name and the expression may already tell the whole story.

Types are labels that prevent later guesswork. A ticket number, room name, function value, and generic box can all be written as values, but type notes say which promises the code expects to keep.

Do not add type detail as decoration. Add it when it helps a reader, fixes an edge, explains a public API, or lets generic code say exactly which kind of value it can accept.
