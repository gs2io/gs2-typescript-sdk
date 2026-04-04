import IModel from '../../core/interface/IModel';
export default class MetricModel implements IModel {
    private name;
    private type;
    private labels;
    static isValid(grn: string): boolean;
    static createGrn(): string | null;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getLabels(): string[] | null;
    setLabels(labels: string[] | null): this;
    withLabels(labels: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MetricModel | null;
    toDict(): {
        [key: string]: any;
    };
}
