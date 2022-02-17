import IRequest from '../../core/interface/IRequest';
import * as Gs2Enhance from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private enableDirectEnhance;
    private queueNamespaceId;
    private keyId;
    private enhanceScript;
    private logSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getEnableDirectEnhance(): boolean | null;
    setEnableDirectEnhance(enableDirectEnhance: boolean | null): this;
    withEnableDirectEnhance(enableDirectEnhance: boolean | null): this;
    getQueueNamespaceId(): string | null;
    setQueueNamespaceId(queueNamespaceId: string | null): this;
    withQueueNamespaceId(queueNamespaceId: string | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    getEnhanceScript(): Gs2Enhance.ScriptSetting | null;
    setEnhanceScript(enhanceScript: Gs2Enhance.ScriptSetting | null): this;
    withEnhanceScript(enhanceScript: Gs2Enhance.ScriptSetting | null): this;
    getLogSetting(): Gs2Enhance.LogSetting | null;
    setLogSetting(logSetting: Gs2Enhance.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Enhance.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
