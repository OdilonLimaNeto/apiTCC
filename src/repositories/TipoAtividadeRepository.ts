import { EntityRepository, Repository } from 'typeorm';
import { TipoAtividade } from '../models/TipoAtividade';


@EntityRepository(TipoAtividade)
class TipoAtivdadeRepository extends Repository<TipoAtividade> {};

export { TipoAtivdadeRepository }