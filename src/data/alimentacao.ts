import { rotaGoogleCoordenadas, type PontoServico } from './mapa-servicos';

export const fonteCardapio = 'https://sigaest.ufpa.br/sigaest/programas.php';
export const fonteRu = 'https://ufpa.br/restaurante-universitario-da-ufpa-reabre-no-dia-17-de-janeiro-com-feijoada-no-cardapio/';
export const fonteAcessoRu = 'https://portal.ufpa.br/index.php/ultimas-noticias2/14134-ufpa-inicia-segunda-fase-de-implementacao-do-acesso-digital-aos-restaurantes-universitarios';

export const unidadesRu: PontoServico[] = [
  {
    id: 'ru-basico',
    nome: 'RU — Setor Básico',
    categoria: 'Restaurante Universitário',
    setor: 'Básico',
    lat: -1.477869,
    lng: -48.4581474,
    descricao: 'Unidade próxima à orla e à Biblioteca Central.',
    horario: 'Seg. a sex.: almoço 11h–14h; jantar 17h45–19h15',
    origemHorario: 'confirmar',
    rota: rotaGoogleCoordenadas(-1.477869, -48.4581474),
  },
  {
    id: 'ru-profissional',
    nome: 'RU — Setor Profissional',
    categoria: 'Restaurante Universitário',
    setor: 'Profissional',
    lat: -1.473437,
    lng: -48.4506511,
    descricao: 'Unidade próxima ao ITEC e ao Portão 3.',
    horario: 'Seg. a sex.: almoço 11h–14h; jantar 17h45–19h15',
    origemHorario: 'confirmar',
    rota: rotaGoogleCoordenadas(-1.473437, -48.4506511),
  },
];

// Pontos cadastrados pela comunidade do OpenStreetMap. Comércio e horários podem mudar sem aviso.
export const pontosAlimentacao: PontoServico[] = [
  ...unidadesRu,
  { id: 'veropesinho-basico', nome: 'Ver-o-pesinho Básico', categoria: 'Praça de alimentação', setor: 'Básico', lat: -1.4757554, lng: -48.4567247, descricao: 'Conjunto de opções de alimentação próximo à Biblioteca Central.', horario: 'Confirmar no local', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4757554, -48.4567247) },
  { id: 'cantina-geociencias', nome: 'Cantina do Instituto de Geociências', categoria: 'Cantina', setor: 'Básico', lat: -1.474613, lng: -48.4573505, descricao: 'Ponto de alimentação no entorno do Instituto de Geociências.', horario: 'Confirmar no local', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.474613, -48.4573505) },
  { id: 'restaurante-neia', nome: 'Restaurante da Néia', categoria: 'Restaurante', setor: 'Básico', lat: -1.4745413, lng: -48.4563356, descricao: 'Opção de alimentação próxima ao ICEN.', horario: 'Seg. a sex., 8h–17h (OpenStreetMap)', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4745413, -48.4563356) },
  { id: 'macacario', nome: 'Restaurante do Macacário', categoria: 'Lanche', setor: 'Básico', lat: -1.4725538, lng: -48.45805, descricao: 'Ponto de lanche na região do ICB.', horario: 'Confirmar no local', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4725538, -48.45805) },
  { id: 'veropesinho-profissional', nome: 'Ver-o-pesinho Profissional', categoria: 'Praça de alimentação', setor: 'Profissional', lat: -1.4737539, lng: -48.4505434, descricao: 'Opções de alimentação próximas ao ITEC e ao RU Profissional.', horario: 'Todos os dias, 8h–19h30 (OpenStreetMap)', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4737539, -48.4505434) },
  { id: 'lanche-eli', nome: 'Lanche da Eli', categoria: 'Lanche', setor: 'Profissional', lat: -1.4737048, lng: -48.449998, descricao: 'Ponto de lanche próximo ao ICSA.', horario: 'Confirmar no local', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4737048, -48.449998) },
  { id: 'cantina-iced', nome: 'Cantina próxima ao ICED', categoria: 'Cantina', setor: 'Profissional', lat: -1.4729045, lng: -48.4500025, descricao: 'Cantina cadastrada no entorno do ICED.', horario: 'Todos os dias, 9h–19h (OpenStreetMap)', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4729045, -48.4500025) },
  { id: 'restaurante-naea', nome: 'Restaurante do NAEA', categoria: 'Restaurante', setor: 'Profissional', lat: -1.4718791, lng: -48.4495625, descricao: 'Restaurante no entorno do NAEA e do ICJ.', horario: 'Confirmar no local', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4718791, -48.4495625) },
  { id: 'cantina-naza', nome: 'Cantina da Naza', categoria: 'Cantina', setor: 'Profissional', lat: -1.4753674, lng: -48.4532849, descricao: 'Cantina próxima à Universitec.', horario: 'Confirmar no local', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4753674, -48.4532849) },
  { id: 'ray-cafe', nome: 'Ray Café', categoria: 'Café', setor: 'Profissional', lat: -1.4753912, lng: -48.4529474, descricao: 'Café no entorno da Universitec.', horario: 'Confirmar no local', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4753912, -48.4529474) },
  { id: 'quentinha-mundica', nome: 'Quentinha da Mundica', categoria: 'Restaurante', setor: 'Profissional', lat: -1.4709666, lng: -48.4548261, descricao: 'Opção de refeição na Avenida Perimetral da Ciência.', horario: 'Confirmar no local', origemHorario: 'comunidade', rota: rotaGoogleCoordenadas(-1.4709666, -48.4548261) },
];

export const passosAcessoRu = [
  { icone: 'documento', titulo: 'Comprove o vínculo', texto: 'Tenha um documento oficial com foto e um comprovante de vínculo atualizado da UFPA.' },
  { icone: 'passagem', titulo: 'Leve um cartão com chip', texto: 'A orientação institucional de acesso digital indica cartão pessoal com chip compatível. O cartão não deve ser emprestado.' },
  { icone: 'dinheiro', titulo: 'Adquira ou consulte créditos', texto: 'O fluxo institucional usa créditos vinculados ao cartão. Verifique no canal atual da PROAES como fazer a aquisição.' },
  { icone: 'acessibilidade', titulo: 'Passe pela catraca', texto: 'Aproxime o cartão no leitor. Se houver falha ou necessidade de acessibilidade, procure a equipe da unidade.' },
];
