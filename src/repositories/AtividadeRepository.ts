import { EntityRepository, Repository } from 'typeorm';
import { Atividade } from '../entities/Atividade';

@EntityRepository(Atividade)
class AtividadeRepository extends Repository<Atividade> {};


export { AtividadeRepository };