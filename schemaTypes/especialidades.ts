import {defineField, defineType} from 'sanity'

export default defineType({
	name: 'especialidad',
	title: 'Especialidad',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Nombre',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Imagen',
			type: 'string',
		}),
		defineField({
			name: 'pdf1',
			title: 'PDF Desarrolladas',
			type: 'string',
		}),
		defineField({
			name: 'pdf2',
			title: 'PDF Requisitos',
			type: 'string',
		}),
		defineField({
			name: 'category',
			title: 'Categorias',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: [
						{
							type: 'category',
							title: 'Categories',
						},
					],
				},
			],
		}),

		defineField({
			name: 'video',
			title: 'Video',
			type: 'string',
		}),
	],
})
