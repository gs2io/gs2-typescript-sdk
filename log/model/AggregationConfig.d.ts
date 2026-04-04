import IModel from '../../core/interface/IModel';
export default class AggregationConfig implements IModel {
    private type;
    private field;
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getField(): string | null;
    setField(field: string | null): this;
    withField(field: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AggregationConfig | null;
    toDict(): {
        [key: string]: any;
    };
}
