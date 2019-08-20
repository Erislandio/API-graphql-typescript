import { ModelsInterface } from "./ModelsInterface";

export interface BaseModelInterface {
    // * metodo
    prototype?; 
    // sequelize
    associate?(modesl: ModelsInterface): void;
}