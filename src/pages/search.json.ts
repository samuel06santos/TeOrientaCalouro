import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const guias = await getCollection('guias');
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const dados = guias.map((guia) => ({ titulo: guia.data.titulo, resumo: guia.data.resumo, tags: guia.data.tags, url: `${base}guia/${guia.id}` }));
  return new Response(JSON.stringify(dados), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
