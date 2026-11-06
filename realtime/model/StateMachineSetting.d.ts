import IModel from '../../core/interface/IModel';
export default class StateMachineSetting implements IModel {
    private namespaceId;
    private version;
    getNamespaceId(): string | null;
    setNamespaceId(namespaceId: string | null): this;
    withNamespaceId(namespaceId: string | null): this;
    getVersion(): number | null;
    setVersion(version: number | null): this;
    withVersion(version: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StateMachineSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
