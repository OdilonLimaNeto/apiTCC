import { EntityRepository, Repository } from 'typeorm';
import { Igreja } from '../models/Igreja';

@EntityRepository(Igreja)
class IgrejaRepository extends Repository<Igreja> {};

export { IgrejaRepository };