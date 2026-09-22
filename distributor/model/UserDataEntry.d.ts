import IModel from '../../core/interface/IModel';
export default class UserDataEntry implements IModel {
    private service;
    private namespaceName;
    private kind;
    private payload;
    getService(): string | null;
    setService(service: string | null): this;
    withService(service: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getKind(): string | null;
    setKind(kind: string | null): this;
    withKind(kind: string | null): this;
    getPayload(): string | null;
    setPayload(payload: string | null): this;
    withPayload(payload: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UserDataEntry | null;
    toDict(): {
        [key: string]: any;
    };
}
