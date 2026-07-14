import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const guias = await getCollection('guias');
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const dadosGuias = guias.map((guia) => ({ titulo: guia.data.titulo, resumo: guia.data.resumo, tags: guia.data.tags, url: `${base}guia/${guia.id}` }));
  const dadosEixos = [
    { titulo: 'Alimentação no campus', resumo: 'Cardápio do RU, horários, documentação de acesso, cantinas e pontos de lanche.', tags: ['ru', 'restaurante', 'cardápio', 'almoço', 'jantar', 'comida', 'cantina', 'lanche'], url: `${base}alimentacao` },
    { titulo: 'Mobilidade interna', resumo: 'Rota, paradas, gratuidade e regras de uso do ônibus Circular da UFPA.', tags: ['circular', 'ônibus', 'transporte', 'parada', 'catraca', 'gratuidade', 'rota'], url: `${base}mobilidade` },
    { titulo: 'Infraestrutura e serviços', resumo: 'Bancos, caixas eletrônicos, bibliotecas, secretarias, horários e rotas.', tags: ['banco', 'caixa', 'biblioteca', 'secretaria', 'horário', 'ciac'], url: `${base}infraestrutura` },
  ];
  const dados = [...dadosEixos, ...dadosGuias];
  return new Response(JSON.stringify(dados), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
