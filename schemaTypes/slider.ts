import {defineField, defineType} from 'sanity'

export default defineType({
	name: 'slider',
	title: 'Slider',
	type: 'document',
	fields: [
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
	],
})
