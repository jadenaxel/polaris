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
		{
			title: 'Imagen',
			name: 'image',
			type: 'image',
			options: {
				metadata: ['location', 'palette'],
				hotspot: true,
			},
		},
		{
			title: 'PDF Desarrolladas',
			name: 'pdf1',
			type: 'file',
		},
		{
			title: 'PDF Requisitos',
			name: 'pdf2',
			type: 'file',
		},
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
