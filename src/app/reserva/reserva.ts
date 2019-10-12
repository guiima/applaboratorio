export interface reserva {
  id: number;
  data_inicio: Date;
  data_final: Date;
  usuario_id: number;
  equipamento_id: number;
  usuario: {
    nome: string;
  };
  equipamento: {
    nome: string;
  };
}
