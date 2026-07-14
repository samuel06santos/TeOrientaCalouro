import { rotaGoogleCoordenadas, type PontoServico } from './mapa-servicos';

const parada = (
  id: string,
  nome: string,
  setor: string,
  lat: number,
  lng: number,
  descricao: string,
): PontoServico => ({
  id,
  nome,
  categoria: 'Parada do Circular',
  setor,
  lat,
  lng,
  descricao,
  rota: rotaGoogleCoordenadas(lat, lng),
});

// Ordem e nomes das paradas conforme o itinerário UFPA publicado pelo Moovit.
// As coordenadas são referências cartográficas para posicionar os pontos no mapa.
export const paradasCircular: PontoServico[] = [
  parada('transporte-icb', 'Transporte / I.C.B.', 'Básico', -1.4728408, -48.4585666, 'Ponto inicial e final do itinerário.'),
  parada('geociencias', 'Geociências', 'Básico', -1.4750909, -48.4583665, 'Parada próxima ao Instituto de Geociências.'),
  parada('ru-basico-circular', 'R.U. Básico', 'Básico', -1.4775537, -48.4580105, 'Acesso ao Restaurante Universitário do Setor Básico.'),
  parada('mirante-blocos', 'Mirante / Blocos de Salas', 'Básico', -1.4778191, -48.4566888, 'Acesso ao Mirante e aos blocos de salas.'),
  parada('vadiao-profissional', 'Vadião (sentido Profissional)', 'Básico', -1.4764597, -48.4548783, 'Parada próxima ao complexo do Vadião.'),
  parada('universitec-pgitec', 'Universitec / Pgitec', 'Profissional', -1.4754521, -48.4539999, 'Acesso à Universitec e ao Pgitec.'),
  parada('eng-mecanica', 'Eng. Mecânica', 'Profissional', -1.4732517, -48.4540454, 'Parada da Engenharia Mecânica.'),
  parada('portao-3-saude', 'Portão 3 (sentido Saúde)', 'Profissional', -1.4727414, -48.4514548, 'Conexão com o Portão 3 e o terminal interno.'),
  parada('icj-saude', 'I.C.J. (sentido Saúde)', 'Profissional', -1.4715287, -48.44999, 'Parada do Instituto de Ciências Jurídicas.'),
  parada('farmacia-saude', 'Farmácia / Odontologia (sentido Saúde)', 'Saúde', -1.472065, -48.4480508, 'Acesso às unidades de Farmácia e Odontologia.'),
  parada('nutricao-saude', 'Nutrição (sentido Saúde)', 'Saúde', -1.4709947, -48.4473871, 'Parada de referência para Nutrição.'),
  parada('bettina-saude', 'Hospital Bettina Ferro (sentido PCT)', 'Saúde', -1.4696438, -48.4464696, 'Parada do HUBFS; pode exigir mais tempo para embarque acessível.'),
  parada('portao-4-pct', 'Portão 4 (sentido PCT)', 'Saúde', -1.4673821, -48.4474942, 'Saída do Setor Saúde em direção ao PCT Guamá.'),
  parada('pct-inpe', 'P.C.T. Guamá (sentido INPE)', 'PCT Guamá', -1.4645, -48.4474, 'Parada no Parque de Ciência e Tecnologia do Guamá.'),
  parada('celso-malcher', 'Escola Dr. Celso Malcher / PCT Guamá', 'PCT Guamá', -1.4648, -48.449, 'Referência de acesso ao PCT Guamá.'),
  parada('pct-profissional', 'P.C.T. Guamá (sentido Profissional)', 'PCT Guamá', -1.4645, -48.4474, 'Retorno do PCT em direção ao Setor Profissional.'),
  parada('portao-4-profissional', 'Portão 4 (sentido Profissional)', 'Saúde', -1.4673821, -48.4474942, 'Retorno pelo Portão 4.'),
  parada('numa-anexo', 'NUMA (Anexo)', 'Profissional', -1.4751084, -48.4514496, 'Parada de referência para o NUMA.'),
  parada('nutricao-profissional', 'Nutrição (sentido Profissional)', 'Saúde', -1.4709947, -48.4473871, 'Retorno pela unidade de Nutrição.'),
  parada('bettina-profissional', 'Hospital Bettina Ferro (sentido Profissional)', 'Saúde', -1.4696438, -48.4464696, 'Retorno pelo HUBFS.'),
  parada('farmacia-profissional', 'Farmácia / Odontologia (sentido Profissional)', 'Saúde', -1.472065, -48.4480508, 'Retorno pelas unidades de Farmácia e Odontologia.'),
  parada('icj-basico', 'I.C.J. (sentido Básico)', 'Profissional', -1.4715287, -48.44999, 'Retorno pelo Instituto de Ciências Jurídicas.'),
  parada('portao-3-basico', 'Portão 3 (sentido Básico)', 'Profissional', -1.4727414, -48.4514548, 'Retorno pelo Portão 3.'),
  parada('eng-ambiental', 'Eng. Ambiental', 'Profissional', -1.4732517, -48.4540454, 'Parada da Engenharia Ambiental.'),
  parada('itec-cidadao', 'Itec Cidadão', 'Profissional', -1.4753067, -48.4542004, 'Acesso ao ITEC Cidadão.'),
  parada('vadiao-basico', 'Vadião (sentido Básico)', 'Básico', -1.4764597, -48.4548783, 'Retorno pelo complexo do Vadião.'),
  parada('reitoria-biblioteca', 'Reitoria / Biblioteca Central', 'Básico', -1.4758845, -48.4555851, 'Acesso à Reitoria e à Biblioteca Central.'),
  parada('icen-ctic', 'I.C.E.N. / C.T.I.C.', 'Básico', -1.4744822, -48.4557769, 'Acesso ao ICEN e ao CTIC.'),
  parada('ginasio-ilc-ifch', 'Ginásio / I.L.C. / I.F.C.H.', 'Básico', -1.4731845, -48.4558962, 'Referência para Ginásio, ILC e IFCH.'),
  parada('capacit-grafica', 'CAPACIT / Gráfica', 'Básico', -1.4723666, -48.4572715, 'Acesso ao CAPACIT e à Gráfica Universitária.'),
  parada('transporte-icb-final', 'Transporte / I.C.B.', 'Básico', -1.4728408, -48.4585666, 'Encerramento do circuito.'),
];

export const tracadoCircular = paradasCircular.map(({ lat, lng }) => [lat, lng] as [number, number]);

export const horariosCircular = {
  dias: 'segunda a sexta-feira',
  inicio: '07:00',
  fim: '22:00',
  intervalo: '20 minutos',
  duracaoMoovit: 'aproximadamente 21 minutos',
  partidas: Array.from({ length: 46 }, (_, indice) => {
    const minutos = 7 * 60 + indice * 20;
    return `${String(Math.floor(minutos / 60)).padStart(2, '0')}:${String(minutos % 60).padStart(2, '0')}`;
  }),
};

export const regrasCircular = [
  { icone: 'dinheiro', titulo: 'Gratuito', texto: 'O Circular é um transporte interno gratuito para a comunidade que circula pelo campus.' },
  { icone: 'rota', titulo: 'Dois sentidos', texto: 'A descrição institucional informa dois ônibus trafegando em sentidos opostos.' },
  { icone: 'local', titulo: 'Paradas sinalizadas', texto: 'O embarque e o desembarque devem ocorrer apenas nos pontos devidamente identificados.' },
  { icone: 'acessibilidade', titulo: 'Acessibilidade', texto: 'Os veículos têm acesso para cadeirantes. O HUBFS pode demandar mais tempo para embarque e desembarque.' },
  { icone: 'velocidade', titulo: 'Segurança', texto: 'A referência institucional informa controle de velocidade de até 30 km/h.' },
  { icone: 'horario', titulo: 'Pausas maiores', texto: 'O terminal pode ter parada de até 10 minutos; no HUBFS, o atendimento acessível também pode aumentar o tempo.' },
];

export const linksMobilidade = {
  moovitRota: 'https://moovitapp.com/index/pt-br/transporte_p%C3%BAblico-line-ufpa-Belem-3183-854457-333395-0',
  moovitHorarios: 'https://moovitapp.com/index/pt-br/transporte_p%C3%BAblico-time-ufpa-Belem-3183-854457-333395-7938351-0',
  fonteUfpaAtual: 'https://ufpa.br/campus-guama-conheca-os-principais-acessos-da-cidade-universitaria-da-ufpa/',
  fonteUfpaCircular: 'https://ascom.ufpa.br/index.php/banco-de-pautas/68-servicos-da-ufpa/967-circular-encurta-distancias-na-ufpa-e-transporta-diariamente-milhares-de-passageiros',
  fonteAppCircular: 'https://portal.ufpa.br/index.php/ultimas-noticias2/7812-aplicativo-monitora-a-rota-do-onibus-circular-pela-universidade',
  fonteOlhaOnibus: 'https://ufpa.br/aplicativo-colaborativo-compartilha-as-rotas-e-a-localizacao-de-linhas-de-onibus-em-belem/',
  circularPlay: 'https://play.google.com/store/apps/details?id=org.lasseufpa.Circular',
  olhaOnibusPlay: 'https://play.google.com/store/apps/details?id=br.com.projetoslabex.olhaoonibus',
};
