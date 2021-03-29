import { getManager, getCustomRepository } from 'typeorm';
import { TipoAtividade } from "../models/TipoAtividade";
import { TipoAtivdadeRepository } from '../repositories/TipoAtividadeRepository';


class TipoAtividadeController {
    async create(tipoAtividade: TipoAtividade) {
        const criarTipoAtividade = await getManager().save(tipoAtividade);
        return criarTipoAtividade;
    };

    async index() {
        const tipoAtividadeRepository = getCustomRepository(TipoAtivdadeRepository);
        const listagem = await tipoAtividadeRepository.find();
        return listagem;
    };

    async delete(id: string) {
        const tipoAtividadeRepository = getCustomRepository(TipoAtivdadeRepository);

        const tipoatividade =  await tipoAtividadeRepository.delete(id);
        
         return tipoatividade;
    };

    async buscarTipoAtivdade(id: string) {
        const tipoatividade = await getManager().findOne(TipoAtividade, id);

        return tipoatividade;
    }
}

export default new TipoAtividadeController()