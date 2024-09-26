import IRequest from '../../core/interface/IRequest';
export default class CreateScriptRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private script;
    private disableStringNumberToNumber;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getScript(): string | null;
    setScript(script: string | null): this;
    withScript(script: string | null): this;
    getDisableStringNumberToNumber(): boolean | null;
    setDisableStringNumberToNumber(disableStringNumberToNumber: boolean | null): this;
    withDisableStringNumberToNumber(disableStringNumberToNumber: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateScriptRequest;
    toDict(): {
        [key: string]: any;
    };
}
