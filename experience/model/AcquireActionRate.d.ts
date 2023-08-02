import IModel from '../../core/interface/IModel';
export default class AcquireActionRate implements IModel {
    private name;
    private rates;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getRates(): number[] | null;
    setRates(rates: number[] | null): this;
    withRates(rates: number[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireActionRate | null;
    toDict(): {
        [key: string]: any;
    };
}
