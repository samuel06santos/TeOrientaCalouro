// Retorna o ano atual, para manter o link do calendário atualizado sem precisar alterar o código.
const anoAtual = new Date().getFullYear();

export const linksOficiais = {
  sigaa: 'https://sigaa.ufpa.br/sigaa/',
  ufpa: 'https://ufpa.br/',
  ciac: 'https://ciac.ufpa.br/',
  saest: 'https://saest.ufpa.br/',
  ctic: 'https://ctic.ufpa.br/',
  biblioteca: 'https://bc.ufpa.br/',
  prefeitura: 'https://prefeitura.ufpa.br/',
  sagitta: 'https://sagitta.ufpa.br/',
  calendario: `https://www.google.com/search?q=calendario+ufpa+${anoAtual}`,
};
