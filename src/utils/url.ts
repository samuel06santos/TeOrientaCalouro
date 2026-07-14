/** Gera links que funcionam no caminho local e no subdiretório do GitHub Pages. */
const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

export const comBase = (caminho = '') => `${base}${caminho.replace(/^\//, '')}`;
