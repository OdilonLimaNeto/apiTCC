import { EntityRepository, Repository } from "typeorm";
import { Estado } from "../models/Estado";


@EntityRepository(Estado)
class EstadoRepository extends Repository<Estado> {};


export { EstadoRepository };