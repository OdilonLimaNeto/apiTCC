import { EntityRepository, Repository } from 'typeorm';
import { Cargo } from '../models/Cargo';

@EntityRepository(Cargo)
class CargoRepository extends Repository<Cargo> {};

export { CargoRepository };