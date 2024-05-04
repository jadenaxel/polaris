import {defineField, defineType} from 'sanity'

export default defineType({
	name: 'movie',
	title: 'Pelicula',
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
		defineField({
			name: 'url',
			title: 'URL',
			type: 'string',
		}),
		defineField({
			name: 'desc',
			title: 'Descripcion',
			type: 'text',
		}),
	],
})
