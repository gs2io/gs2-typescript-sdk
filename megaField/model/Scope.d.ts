import IModel from '../../core/interface/IModel';
export default class Scope implements IModel {
    private r;
    private limit;
    getR(): number | null;
    setR(r: number | null): this;
    withR(r: number | null): this;
    getLimit(): number | null;
    setLimit(limit: number | null): this;
    withLimit(limit: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Scope | null;
    toDict(): {
        [key: string]: any;
    };
}
