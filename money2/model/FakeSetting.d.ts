import IModel from '../../core/interface/IModel';
export default class FakeSetting implements IModel {
    private acceptFakeReceipt;
    getAcceptFakeReceipt(): string | null;
    setAcceptFakeReceipt(acceptFakeReceipt: string | null): this;
    withAcceptFakeReceipt(acceptFakeReceipt: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FakeSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
