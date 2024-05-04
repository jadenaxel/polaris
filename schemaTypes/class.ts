import {defineField, defineType} from 'sanity'

export default defineType({
	name: 'class',
	title: 'Clases Progresivas',
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
			title: 'PDF',
			name: 'pdf',
			type: 'file',
		},
	],
})
