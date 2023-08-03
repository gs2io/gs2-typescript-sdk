import IModel from '../../core/interface/IModel';
export default class Scope implements IModel {
    private name;
    private targetDays;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getTargetDays(): number | null;
    setTargetDays(targetDays: number | null): this;
    withTargetDays(targetDays: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Scope | null;
    toDict(): {
        [key: string]: any;
    };
}
