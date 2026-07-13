import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guias = defineCollection({
  loader: glob({ base: './src/content/guias', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    icone: z.string(),
    ordem: z.number(),
    destaque: z.boolean().default(false),
    atualizadoEm: z.string(),
    tags: z.array(z.string()),
    fonte: z.string().url(),
    fonteNome: z.string(),
  }),
});

export const collections = { guias };
