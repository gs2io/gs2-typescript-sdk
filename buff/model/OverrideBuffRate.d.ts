import IModel from '../../core/interface/IModel';
export default class OverrideBuffRate implements IModel {
    private name;
    private rate;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getRate(): number | null;
    setRate(rate: number | null): this;
    withRate(rate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): OverrideBuffRate | null;
    toDict(): {
        [key: string]: any;
    };
}
