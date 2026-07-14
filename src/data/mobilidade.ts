import { rotaGoogleCoordenadas, type PontoServico } from './mapa-servicos';

const parada = (id: string, nome: string, setor: string, lat: number, lng: number, descricao: string): PontoServico => ({
  id,
  nome,
  categoria: 'Parada do Circular',
  setor,
  lat,
  lng,
  descricao,
  rota: rotaGoogleCoordenadas(lat, lng),
});

// Coordenadas dos pontos sinalizados na base do OpenStreetMap, verificadas em julho de 2026.
export const paradasCircular: PontoServico[] = [
  parada('reitoria', 'Reitoria', 'Básico', -1.4758845, -48.4555851, 'Referência para Reitoria e Centro de Eventos.'),
  parada('vadiao', 'Vadião', 'Básico', -1.4764597, -48.4548783, 'Parada próxima a serviços, bancos e convivência.'),
  parada('editora', 'Editora Universitária', 'Básico', -1.4769892, -48.4582546, 'Acesso à Editora e à região da orla.'),
  parada('ru-basico', 'RU — Setor Básico', 'Básico', -1.4775537, -48.4580105, 'Parada de referência para o Restaurante Universitário.'),
  parada('mirante', 'Mirante do Rio / Bloco de Salas', 'Básico', -1.4778191, -48.4566888, 'Acesso ao Mirante e aos blocos de aula.'),
  parada('ig', 'Instituto de Geociências', 'Básico', -1.4750909, -48.4583665, 'Parada próxima ao IG.'),
  parada('icen', 'ICEN', 'Básico', -1.4744822, -48.4557769, 'Acesso ao Instituto de Ciências Exatas e Naturais.'),
  parada('ginásio', 'Ginásio', 'Básico', -1.4731845, -48.4558962, 'Referência para o Setor Esportivo.'),
  parada('mecanica', 'Eng. Mecânica / Eng. Ambiental', 'Profissional', -1.4732517, -48.4540454, 'Acesso às faculdades de Engenharia.'),
  parada('transportes', 'Setor de Transportes', 'Profissional', -1.4728408, -48.4585666, 'Referência na Avenida Perimetral da Ciência.'),
  parada('portao-3', 'Portão 3 / Terminal', 'Profissional', -1.4727414, -48.4514548, 'Integração com o terminal e acesso ao campus.'),
  parada('itec-cidadao', 'ITEC Cidadão', 'Profissional', -1.4753067, -48.4542004, 'Acesso à região do ITEC e da Universitec.'),
  parada('universitec', 'Universitec', 'Profissional', -1.4754521, -48.4539999, 'Parada próxima à Universitec.'),
  parada('icsa', 'ICSA', 'Profissional', -1.4725101, -48.4488434, 'Acesso ao Instituto de Ciências Sociais Aplicadas.'),
  parada('icj-naea', 'ICJ / NAEA', 'Profissional', -1.4715287, -48.44999, 'Acesso ao Instituto de Ciências Jurídicas e ao NAEA.'),
  parada('farmacia', 'Farmácia e Odontologia', 'Saúde', -1.472065, -48.4480508, 'Parada para unidades do Setor Saúde.'),
  parada('genomica', 'Centro de Genômica', 'Saúde', -1.4685203, -48.4482881, 'Acesso ao Centro de Genômica.'),
  parada('hubfs', 'Hospital Universitário Bettina Ferro', 'Saúde', -1.4696438, -48.4464696, 'Parada de referência para o HUBFS.'),
  parada('portao-4', 'Portão 4', 'Saúde', -1.4673821, -48.4474942, 'Acesso pela Avenida Perimetral.'),
];

// O traçado conecta as paradas como referência visual; a via usada pelo ônibus pode variar.
export const tracadoCircular = paradasCircular.map(({ lat, lng }) => [lat, lng] as [number, number]);

export const regrasCircular = [
  { icone: 'dinheiro', titulo: 'Gratuito', texto: 'A UFPA informa que o Circular é gratuito. Não há cobrança de passagem.' },
  { icone: 'local', titulo: 'Embarque sinalizado', texto: 'O embarque e o desembarque devem ocorrer apenas nos pontos identificados ao longo do campus.' },
  { icone: 'acessibilidade', titulo: 'Frota acessível', texto: 'A orientação institucional de 2026 destaca veículos elétricos e acessíveis.' },
  { icone: 'passagem', titulo: 'Cartão e catraca', texto: 'A orientação oficial atual não informa exigência de cartão ou pagamento. Siga a sinalização e a orientação da equipe ao embarcar.' },
];
