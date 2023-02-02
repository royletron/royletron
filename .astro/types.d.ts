declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"post": {
"2022-02-28-wrestly.mdx": {
  id: "2022-02-28-wrestly.mdx",
  slug: "2022-02-28-wrestly",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-03-22-voncount.mdx": {
  id: "2022-03-22-voncount.mdx",
  slug: "2022-03-22-voncount",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
"2022-12-03-hiring.mdx": {
  id: "2022-12-03-hiring.mdx",
  slug: "2022-12-03-hiring",
  body: string,
  collection: "post",
  data: InferEntrySchema<"post">
},
},
"scm": {
"voncount.mdx": {
  id: "voncount.mdx",
  slug: "voncount",
  body: string,
  collection: "scm",
  data: InferEntrySchema<"scm">
},
"wrestly.mdx": {
  id: "wrestly.mdx",
  slug: "wrestly",
  body: string,
  collection: "scm",
  data: InferEntrySchema<"scm">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
