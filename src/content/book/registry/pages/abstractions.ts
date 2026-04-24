import type { RawBookPageDefinition } from "../types";

export const abstractionsPages = [
	{
		id: "shapes",
		partId: "abstractions",
		path: "/docs/book/abstractions/shapes",
		aliases: [],
		sourcePath: "docs/what/language/abstractions/shapes.md",
		questions: [],
	},
	{
		id: "given-values",
		partId: "abstractions",
		path: "/docs/book/abstractions/given-values",
		aliases: [],
		sourcePath: "docs/what/language/abstractions/given-values.md",
		questions: [],
	},
	{
		id: "laws",
		partId: "abstractions",
		path: "/docs/book/abstractions/laws",
		aliases: [
			"/docs/language/abstractions/laws",
			"/learn/language/abstractions/laws",
		],
		sourcePath: "docs/what/language/abstractions/laws.md",
		questions: [],
	},
] satisfies readonly RawBookPageDefinition[];
