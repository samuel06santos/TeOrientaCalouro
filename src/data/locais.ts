export type Local = { nome: string; categoria: string; setor: string; lat: number; lng: number; descricao: string; rota: string };

const rotaGoogle = (busca: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busca)}`;

// Pontos de referência do Campus Guamá para a primeira versão do mapa.
// As coordenadas vêm da base cartográfica aberta do OpenStreetMap e as rotas são abertas no Google Maps.
export const locais: Local[] = [
  { nome: 'Portão 1', categoria: 'Acesso', setor: 'Básico', lat: -1.4760265, lng: -48.4594414, descricao: 'Entrada próxima ao Setor Básico, à Biblioteca Central e ao RU do Setor Básico.', rota: rotaGoogle('Portão 1 UFPA Belém') },
  { nome: 'Portão 2', categoria: 'Acesso', setor: 'Básico', lat: -1.4724482, lng: -48.4560045, descricao: 'Acesso pela Avenida Perimetral da Ciência, com referência do posto policial.', rota: rotaGoogle('Portão 2 UFPA Belém') },
  { nome: 'Portão 3 / Terminal', categoria: 'Acesso e ônibus', setor: 'Profissional', lat: -1.4727414, lng: -48.4514548, descricao: 'Entrada de referência para o Setor Profissional e para o terminal interno.', rota: rotaGoogle('Portão 3 UFPA Belém') },
  { nome: 'Portão 4', categoria: 'Acesso', setor: 'Saúde', lat: -1.4669668, lng: -48.4478125, descricao: 'Entrada próxima aos serviços e unidades acadêmicas do Setor Saúde.', rota: rotaGoogle('Portão 4 UFPA Belém') },
  { nome: 'Biblioteca Central', categoria: 'Biblioteca', setor: 'Básico', lat: -1.4761918, lng: -48.456582, descricao: 'Acervo, estudos, empréstimos e serviços do Sistema de Bibliotecas da UFPA.', rota: rotaGoogle('Biblioteca Central UFPA Belém') },
  { nome: 'RU — Setor Básico', categoria: 'Alimentação', setor: 'Básico', lat: -1.4775537, lng: -48.4580105, descricao: 'Restaurante Universitário do Setor Básico. Confirme funcionamento nos canais oficiais.', rota: rotaGoogle('Restaurante Universitário UFPA Campus Básico Belém') },
  { nome: 'RU — Setor Profissional', categoria: 'Alimentação', setor: 'Profissional', lat: -1.473437, lng: -48.4506511, descricao: 'Restaurante Universitário do Setor Profissional.', rota: rotaGoogle('Restaurante Universitário UFPA Campus Profissional Belém') },
  { nome: 'Reitoria', categoria: 'Atendimento', setor: 'Básico', lat: -1.4758845, lng: -48.4555851, descricao: 'Administração central da Universidade e referência próxima ao Centro de Eventos.', rota: rotaGoogle('Reitoria UFPA Belém') },
  { nome: 'Centro de Eventos Benedito Nunes', categoria: 'Eventos', setor: 'Básico', lat: -1.4751015, lng: -48.4553991, descricao: 'Espaço para eventos acadêmicos, culturais e institucionais.', rota: rotaGoogle('Centro de Eventos Benedito Nunes UFPA Belém') },
  { nome: 'ICEN', categoria: 'Instituto', setor: 'Básico', lat: -1.4745019, lng: -48.4562531, descricao: 'Instituto de Ciências Exatas e Naturais.', rota: rotaGoogle('Instituto de Ciências Exatas e Naturais UFPA Belém') },
  { nome: 'ITEC', categoria: 'Instituto', setor: 'Profissional', lat: -1.4729416, lng: -48.4506982, descricao: 'Instituto de Tecnologia, próximo ao Portão 3.', rota: rotaGoogle('Instituto de Tecnologia ITEC UFPA Belém') },
  { nome: 'ICED', categoria: 'Instituto', setor: 'Profissional', lat: -1.4728665, lng: -48.4500074, descricao: 'Instituto de Ciências da Educação.', rota: rotaGoogle('Instituto de Ciências da Educação ICED UFPA Belém') },
  { nome: 'ICJ', categoria: 'Instituto', setor: 'Profissional', lat: -1.4712529, lng: -48.4497389, descricao: 'Instituto de Ciências Jurídicas.', rota: rotaGoogle('Instituto de Ciências Jurídicas ICJ UFPA Belém') },
  { nome: 'HUBFS', categoria: 'Saúde', setor: 'Saúde', lat: -1.4693599, lng: -48.4466838, descricao: 'Hospital Universitário Bettina Ferro de Souza.', rota: rotaGoogle('Hospital Universitário Bettina Ferro de Souza UFPA Belém') },
  { nome: 'Terminal de ônibus da UFPA', categoria: 'Transporte', setor: 'Profissional', lat: -1.4728262, lng: -48.4526251, descricao: 'Referência de transporte interno e linhas que atendem o campus.', rota: rotaGoogle('Terminal de ônibus UFPA Belém') }
];
