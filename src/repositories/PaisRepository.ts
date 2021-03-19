import { EntityRepository, Repository } from "typeorm";
import { Pais } from "../models/Pais";


@EntityRepository(Pais)
class PaisRepository extends Repository<Pais> {};

export { PaisRepository };