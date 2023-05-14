import IModel from '../../core/interface/IModel';
import ExchangeRate from './ExchangeRate';
export default class ExchangeNamespace implements IModel {
    private namespaceName;
    private rate;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getRate(): ExchangeRate[] | null;
    setRate(rate: ExchangeRate[] | null): this;
    withRate(rate: ExchangeRate[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExchangeNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
