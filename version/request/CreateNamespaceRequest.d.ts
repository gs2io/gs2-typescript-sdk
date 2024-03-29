import IRequest from '../../core/interface/IRequest';
import * as Gs2Version from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private assumeUserId;
    private acceptVersionScript;
    private checkVersionTriggerScriptId;
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
    getAssumeUserId(): string | null;
    setAssumeUserId(assumeUserId: string | null): this;
    withAssumeUserId(assumeUserId: string | null): this;
    getAcceptVersionScript(): Gs2Version.ScriptSetting | null;
    setAcceptVersionScript(acceptVersionScript: Gs2Version.ScriptSetting | null): this;
    withAcceptVersionScript(acceptVersionScript: Gs2Version.ScriptSetting | null): this;
    getCheckVersionTriggerScriptId(): string | null;
    setCheckVersionTriggerScriptId(checkVersionTriggerScriptId: string | null): this;
    withCheckVersionTriggerScriptId(checkVersionTriggerScriptId: string | null): this;
    getLogSetting(): Gs2Version.LogSetting | null;
    setLogSetting(logSetting: Gs2Version.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Version.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
