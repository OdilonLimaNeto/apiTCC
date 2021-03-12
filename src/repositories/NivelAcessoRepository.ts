import { NivelAcesso } from '../models/NivelAcesso';

import { EntityRepository, Repository } from 'typeorm'; 

@EntityRepository()
class NivelAcessoRepository extends Repository<NivelAcesso> {};



export { NivelAcessoRepository };