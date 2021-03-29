import { getManager, getCustomRepository } from 'typeorm';
import { Igreja } from "../entities/Igreja";
import { IgrejaRepository } from '../repositories/IgrejaRepository';


class IgrejaController {
    async create(igreja: Igreja) {
        const criarIgreja = await getManager().save(igreja);
        return criarIgreja;
    };

    async index() {
        const igrejaRepository = getCustomRepository(IgrejaRepository);
        const listagem = await igrejaRepository.find();
        return listagem;
    };

    async delete(id: string) {
        const igrejaRepository = getCustomRepository(IgrejaRepository);

        const igreja =  await igrejaRepository.delete(id);
        
         return igreja;
    };

    async buscarIgreja(id: string) {
        const igreja = await getManager().findOne(Igreja, id);
        return igreja;
    };
};

export default new IgrejaController();