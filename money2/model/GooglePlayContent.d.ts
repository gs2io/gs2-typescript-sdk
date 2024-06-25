import IModel from '../../core/interface/IModel';
export default class GooglePlayContent implements IModel {
    private productId;
    getProductId(): string | null;
    setProductId(productId: string | null): this;
    withProductId(productId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GooglePlayContent | null;
    toDict(): {
        [key: string]: any;
    };
}
