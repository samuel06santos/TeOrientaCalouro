import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const guias = await getCollection('guias');
  const dados = guias.map((guia) => ({ titulo: guia.data.titulo, resumo: guia.data.resumo, tags: guia.data.tags, url: `/guia/${guia.id}` }));
  return new Response(JSON.stringify(dados), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
