import IRequest from '../../core/interface/IRequest';
import * as Gs2Buff from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private applyBuffScript;
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
    getApplyBuffScript(): Gs2Buff.ScriptSetting | null;
    setApplyBuffScript(applyBuffScript: Gs2Buff.ScriptSetting | null): this;
    withApplyBuffScript(applyBuffScript: Gs2Buff.ScriptSetting | null): this;
    getLogSetting(): Gs2Buff.LogSetting | null;
    setLogSetting(logSetting: Gs2Buff.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Buff.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
