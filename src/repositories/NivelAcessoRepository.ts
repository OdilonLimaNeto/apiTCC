import { EntityRepository, Repository } from 'typeorm';
import { NivelAcesso } from '../entities/NivelAcesso';

@EntityRepository(NivelAcesso)
class NivelAcessoRepository extends Repository<NivelAcesso> {};

export { NivelAcessoRepository };