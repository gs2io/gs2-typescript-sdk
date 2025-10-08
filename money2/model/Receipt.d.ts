import IModel from '../../core/interface/IModel';
export default class Receipt implements IModel {
    private store;
    private transactionID;
    private payload;
    getStore(): string | null;
    setStore(store: string | null): this;
    withStore(store: string | null): this;
    getTransactionID(): string | null;
    setTransactionID(transactionID: string | null): this;
    withTransactionID(transactionID: string | null): this;
    getPayload(): string | null;
    setPayload(payload: string | null): this;
    withPayload(payload: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Receipt | null;
    toDict(): {
        [key: string]: any;
    };
}
