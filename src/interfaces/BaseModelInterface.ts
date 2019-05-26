import { ModelsInteface } from "./ModelsInterface";

export interface BaseModelInterface {
  prototype?;
  associate(models: ModelsInteface): void;
}
