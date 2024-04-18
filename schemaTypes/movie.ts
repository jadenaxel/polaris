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
		defineField({
			name: 'img',
			title: 'Imagen',
			type: 'string',
		}),
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
