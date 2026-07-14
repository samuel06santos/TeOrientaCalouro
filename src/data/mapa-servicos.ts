export type OrigemHorario = 'oficial' | 'comunidade' | 'confirmar';

export type PontoServico = {
  id: string;
  nome: string;
  categoria: string;
  setor: string;
  lat: number;
  lng: number;
  descricao: string;
  horario?: string;
  origemHorario?: OrigemHorario;
  url?: string;
  rota: string;
};

export const rotaGoogleCoordenadas = (lat: number, lng: number) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

export const rotaGoogleBusca = (busca: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(busca)}`;
