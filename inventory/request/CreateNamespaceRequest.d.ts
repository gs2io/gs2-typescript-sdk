import IRequest from '../../core/interface/IRequest';
import * as Gs2Inventory from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private acquireScript;
    private overflowScript;
    private consumeScript;
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
    getAcquireScript(): Gs2Inventory.ScriptSetting | null;
    setAcquireScript(acquireScript: Gs2Inventory.ScriptSetting | null): this;
    withAcquireScript(acquireScript: Gs2Inventory.ScriptSetting | null): this;
    getOverflowScript(): Gs2Inventory.ScriptSetting | null;
    setOverflowScript(overflowScript: Gs2Inventory.ScriptSetting | null): this;
    withOverflowScript(overflowScript: Gs2Inventory.ScriptSetting | null): this;
    getConsumeScript(): Gs2Inventory.ScriptSetting | null;
    setConsumeScript(consumeScript: Gs2Inventory.ScriptSetting | null): this;
    withConsumeScript(consumeScript: Gs2Inventory.ScriptSetting | null): this;
    getLogSetting(): Gs2Inventory.LogSetting | null;
    setLogSetting(logSetting: Gs2Inventory.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Inventory.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}