import IModel from '../../core/interface/IModel';
export default class RoleModel implements IModel {
    private name;
    private metadata;
    private policyDocument;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getPolicyDocument(): string | null;
    setPolicyDocument(policyDocument: string | null): this;
    withPolicyDocument(policyDocument: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RoleModel | null;
    toDict(): {
        [key: string]: any;
    };
}
