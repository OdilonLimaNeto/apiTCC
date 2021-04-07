import { getCustomRepository, getManager } from 'typeorm';
import { Atividade } from '../entities/Atividade';
import { AtividadeRepository } from '../repositories/AtividadeRepository';


class AtividadeController {
    async index() {
        const atividadeRepository = getCustomRepository(AtividadeRepository);
        const listagem = await atividadeRepository.find();
        return listagem;
    };

    async create(atividade: Atividade) {
        const criarAtividade = await getManager().save(atividade);
        return criarAtividade;
    };

    async delete(id: string) {
        const atividadeRepository = getCustomRepository(AtividadeRepository);
        const atividade =  await atividadeRepository.delete(id);
         return atividade;
    };

    async buscarIDAtividade(id: string) {
        const atividade = await getManager().findOne(Atividade, id);
        return atividade;
    };
};


export default new AtividadeController();