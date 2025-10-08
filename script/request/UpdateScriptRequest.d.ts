import IRequest from '../../core/interface/IRequest';
export default class UpdateScriptRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private scriptName;
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
    getScriptName(): string | null;
    setScriptName(scriptName: string | null): this;
    withScriptName(scriptName: string | null): this;
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
    }): UpdateScriptRequest;
    toDict(): {
        [key: string]: any;
    };
}
