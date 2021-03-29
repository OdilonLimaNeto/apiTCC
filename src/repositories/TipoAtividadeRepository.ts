import { EntityRepository, Repository } from 'typeorm';
import { TipoAtividade } from '../entities/TipoAtividade';


@EntityRepository(TipoAtividade)
class TipoAtivdadeRepository extends Repository<TipoAtividade> {};

export { TipoAtivdadeRepository }