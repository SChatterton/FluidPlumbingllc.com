import { defineCollection, z } from "astro:content";

// Pages
const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    updated: z.string().optional(),
  }),
});

// Blogs
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    cover: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    readTime: z.number(),

    // Author object
    author: z.object({
      name: z.string(),
      job: z.string(),
      avatar: z.string(),
      socials: z.object({
        linkedin: z.string().optional(),
        twitter: z.string().optional(),
        email: z.string().optional(),
      }),
      description: z.string(),
    }),

    description: z.string(),
  }),
});

// service
const service = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),
    icon: z.string(), // Bootstrap icon name (e.g., "truck", "building", "tools")
    title: z.string(),
    cover: z.string(), // Hero cover image
    description: z.string(), // Short description for card
    preview: z.object({
      image: z.string(),
      title: z.string(),
      description: z.string(),
    }),
    benefits: z.array(z.string()), // List of benefit texts
    serviceInfo: z.array(
      z.object({
        label: z.string(),
        description: z.string(),
      })
    ),
    cta: z.object({
      text: z.string(),
      link: z.string(),
    }),
    order: z.number().optional().default(0), // For ordering services
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

// equipment
const equipment = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(), // Equipment type label (e.g., "Excavator", "Bulldozer")
    model: z.string(), // Model/Type/Brand (e.g., "CAT 320", "Komatsu D65")
    title: z.string(), // Display title (e.g., "Hydraulic Excavator")
    cover: z.string(), // Main cover image
    category: z.string(), // For related equipment
    weight: z.string(), // Operating weight
    year: z.number(), // Manufacturing year
    information: z.array(
      z.object({
        label: z.string(),
        description: z.string(),
      })
    ),
    pricing: z.object({
      daily: z.number(),
      weekly: z.number(),
      monthly: z.number(),
    }),
    availability: z.object({
      status: z.enum(["In Stock", "Limited", "Out of Stock"]),
      units: z.number().optional(),
    }).optional(),
    images: z.array(z.string()).optional(), // Additional images for gallery
    cta: z.object({
      text: z.string(),
      link: z.string(),
    }),
    order: z.number().optional().default(0),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

const project = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(), // Project category/type (e.g., "Infrastructure", "Commercial")
    title: z.string(), // Project title
    cover: z.string(), // Main cover image
    description: z.string(), // Short description for card
    status: z.string(), // Project status (e.g., "Completed", "In Progress", "Upcoming")
    information: z.array(
      z.object({
        label: z.string(),
        description: z.string(),
      })
    ),
    images: z.array(z.string()), // Project gallery images
    cta: z.object({
      text: z.string(),
      link: z.string(),
    }),
    order: z.number().optional().default(0),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  pages,
  blog,
  service,
  equipment,
  project,
};