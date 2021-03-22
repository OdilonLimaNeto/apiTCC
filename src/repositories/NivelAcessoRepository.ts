import { EntityRepository, Repository } from 'typeorm';
import { NivelAcesso } from '../models/NivelAcesso';

@EntityRepository(NivelAcesso)
class NivelAcessoRepository extends Repository<NivelAcesso> {};

export { NivelAcessoRepository };