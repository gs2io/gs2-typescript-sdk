import IRequest from '../../core/interface/IRequest';
import * as Gs2Money2 from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private currencyUsagePriority;
    private description;
    private platformSetting;
    private depositBalanceScript;
    private withdrawBalanceScript;
    private logSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getCurrencyUsagePriority(): string | null;
    setCurrencyUsagePriority(currencyUsagePriority: string | null): this;
    withCurrencyUsagePriority(currencyUsagePriority: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getPlatformSetting(): Gs2Money2.PlatformSetting | null;
    setPlatformSetting(platformSetting: Gs2Money2.PlatformSetting | null): this;
    withPlatformSetting(platformSetting: Gs2Money2.PlatformSetting | null): this;
    getDepositBalanceScript(): Gs2Money2.ScriptSetting | null;
    setDepositBalanceScript(depositBalanceScript: Gs2Money2.ScriptSetting | null): this;
    withDepositBalanceScript(depositBalanceScript: Gs2Money2.ScriptSetting | null): this;
    getWithdrawBalanceScript(): Gs2Money2.ScriptSetting | null;
    setWithdrawBalanceScript(withdrawBalanceScript: Gs2Money2.ScriptSetting | null): this;
    withWithdrawBalanceScript(withdrawBalanceScript: Gs2Money2.ScriptSetting | null): this;
    getLogSetting(): Gs2Money2.LogSetting | null;
    setLogSetting(logSetting: Gs2Money2.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Money2.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
