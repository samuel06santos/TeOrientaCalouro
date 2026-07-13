export type Local = { nome: string; categoria: string; setor: string; lat: number; lng: number; descricao: string; rota: string };

export const locais: Local[] = [
  { nome: 'Portão 1', categoria: 'Acesso', setor: 'Básico', lat: -1.4746, lng: -48.4535, descricao: 'Acesso pela Avenida Perimetral, próximo ao Setor Básico.', rota: 'https://www.openstreetmap.org/?mlat=-1.4746&mlon=-48.4535#map=18/-1.4746/-48.4535' },
  { nome: 'Biblioteca Central', categoria: 'Biblioteca', setor: 'Básico', lat: -1.4749, lng: -48.4523, descricao: 'Empréstimos, estudos, acervo físico e digital.', rota: 'https://www.openstreetmap.org/?mlat=-1.4749&mlon=-48.4523#map=18/-1.4749/-48.4523' },
  { nome: 'Restaurante Universitário', categoria: 'Alimentação', setor: 'Básico', lat: -1.4760, lng: -48.4520, descricao: 'Confira horários, cardápio e regras no canal oficial antes de sair.', rota: 'https://www.openstreetmap.org/?mlat=-1.4760&mlon=-48.4520#map=18/-1.4760/-48.4520' },
  { nome: 'Reitoria', categoria: 'Atendimento', setor: 'Profissional', lat: -1.4783, lng: -48.4544, descricao: 'Administração central da Universidade.', rota: 'https://www.openstreetmap.org/?mlat=-1.4783&mlon=-48.4544#map=18/-1.4783/-48.4544' },
  { nome: 'Setor Saúde', categoria: 'Setor', setor: 'Saúde', lat: -1.4669, lng: -48.4575, descricao: 'Área acadêmica e de serviços vinculados à saúde.', rota: 'https://www.openstreetmap.org/?mlat=-1.4669&mlon=-48.4575#map=18/-1.4669/-48.4575' }
];
