import { EntityRepository, Repository } from 'typeorm';
import { Igreja } from '../entities/Igreja';

@EntityRepository(Igreja)
class IgrejaRepository extends Repository<Igreja> {};

export { IgrejaRepository };