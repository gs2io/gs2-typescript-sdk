import IModel from '../../core/interface/IModel';
export default class AcquireActionRate implements IModel {
    private name;
    private mode;
    private rates;
    private bigRates;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMode(): string | null;
    setMode(mode: string | null): this;
    withMode(mode: string | null): this;
    getRates(): number[] | null;
    setRates(rates: number[] | null): this;
    withRates(rates: number[] | null): this;
    getBigRates(): string[] | null;
    setBigRates(bigRates: string[] | null): this;
    withBigRates(bigRates: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquireActionRate | null;
    toDict(): {
        [key: string]: any;
    };
}
