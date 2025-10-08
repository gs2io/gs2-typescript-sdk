import IModel from '../../core/interface/IModel';
export default class LogCost implements IModel {
    private base;
    private adds;
    private subs;
    getBase(): number | null;
    setBase(base: number | null): this;
    withBase(base: number | null): this;
    getAdds(): number[] | null;
    setAdds(adds: number[] | null): this;
    withAdds(adds: number[] | null): this;
    getSubs(): number[] | null;
    setSubs(subs: number[] | null): this;
    withSubs(subs: number[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LogCost | null;
    toDict(): {
        [key: string]: any;
    };
}
