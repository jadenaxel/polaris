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
		defineField({
			name: 'img',
			title: 'Imagen',
			type: 'string',
		}),
		defineField({
			name: 'pdf',
			title: 'PDF',
			type: 'string',
		}),
	],
})
