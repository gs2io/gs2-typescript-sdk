import IRequest from '../../core/interface/IRequest';
import * as Gs2Money2 from '../model';
export default class CreateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private currencyUsagePriority;
    private description;
    private sharedFreeCurrency;
    private platformSetting;
    private changeBalanceScript;
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
    getCurrencyUsagePriority(): string | null;
    setCurrencyUsagePriority(currencyUsagePriority: string | null): this;
    withCurrencyUsagePriority(currencyUsagePriority: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getSharedFreeCurrency(): boolean | null;
    setSharedFreeCurrency(sharedFreeCurrency: boolean | null): this;
    withSharedFreeCurrency(sharedFreeCurrency: boolean | null): this;
    getPlatformSetting(): Gs2Money2.PlatformSetting | null;
    setPlatformSetting(platformSetting: Gs2Money2.PlatformSetting | null): this;
    withPlatformSetting(platformSetting: Gs2Money2.PlatformSetting | null): this;
    getChangeBalanceScript(): Gs2Money2.ScriptSetting | null;
    setChangeBalanceScript(changeBalanceScript: Gs2Money2.ScriptSetting | null): this;
    withChangeBalanceScript(changeBalanceScript: Gs2Money2.ScriptSetting | null): this;
    getLogSetting(): Gs2Money2.LogSetting | null;
    setLogSetting(logSetting: Gs2Money2.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Money2.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
