import IModel from '../../core/interface/IModel';
export default class AppleAppStoreVerifyReceiptEvent implements IModel {
    private environment;
    getEnvironment(): string | null;
    setEnvironment(environment: string | null): this;
    withEnvironment(environment: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AppleAppStoreVerifyReceiptEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
