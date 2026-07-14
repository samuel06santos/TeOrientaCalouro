export type Contato = { setor: string; assunto: string; descricao: string; url: string };
export const contatos: Contato[] = [
  { setor: 'Coordenação do curso', assunto: 'Matrícula, turmas, aproveitamento e rotina do curso', descricao: 'É o primeiro contato para questões específicas da sua graduação. Encontre sua unidade no diretório institucional.', url: 'https://ufpa.br/orgaos/' },
  { setor: 'CIAC', assunto: 'Registro acadêmico e documentos', descricao: 'Central de Registro e Indicadores Acadêmicos: vínculo, histórico e procedimentos acadêmicos.', url: 'https://ciac.ufpa.br/' },
  { setor: 'CTIC / Sagitta', assunto: 'Conta institucional, Wi-Fi e suporte tecnológico', descricao: 'Use o Sagitta para solicitar serviços e registrar chamados de tecnologia.', url: 'https://sagitta.ufpa.br/' },
  { setor: 'SAEST', assunto: 'Auxílios, permanência, RU e acolhimento', descricao: 'Acompanhe editais e orientações de assistência estudantil.', url: 'https://saest.ufpa.br/' }
];
