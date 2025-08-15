import { CollectionConfig } from 'payload'

const Resources: CollectionConfig = {
  slug: 'resources',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'type', 'featured', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      maxLength: 160,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Guide', value: 'guide' },
        { label: 'Template', value: 'template' },
        { label: 'Tool', value: 'tool' },
        { label: 'Course', value: 'course' },
        { label: 'Checklist', value: 'checklist' },
        { label: 'Calculator', value: 'calculator' },
      ],
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'image',
      type: 'text',
      admin: {
        description: 'URL to the resource image',
      },
    },
    {
      name: 'downloadUrl',
      type: 'text',
      admin: {
        description: 'Download link for the resource (if applicable)',
      },
    },
    {
      name: 'externalUrl',
      type: 'text',
      admin: {
        description: 'External link for the resource (if applicable)',
      },
    },
    {
      name: 'difficulty',
      type: 'select',
      options: [
        { label: 'Beginner', value: 'beginner' },
        { label: 'Intermediate', value: 'intermediate' },
        { label: 'Advanced', value: 'advanced' },
      ],
    },
    {
      name: 'estimatedTime',
      type: 'text',
      admin: {
        description: 'Estimated time to complete (e.g., "15 minutes", "2 hours")',
      },
    },
  ],
}

export default Resources