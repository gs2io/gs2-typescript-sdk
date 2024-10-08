import IRequest from '../../core/interface/IRequest';
import * as Gs2Script from '../model';
export default class CreateScriptFromGitHubRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private name;
    private description;
    private checkoutSetting;
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
    getCheckoutSetting(): Gs2Script.GitHubCheckoutSetting | null;
    setCheckoutSetting(checkoutSetting: Gs2Script.GitHubCheckoutSetting | null): this;
    withCheckoutSetting(checkoutSetting: Gs2Script.GitHubCheckoutSetting | null): this;
    getDisableStringNumberToNumber(): boolean | null;
    setDisableStringNumberToNumber(disableStringNumberToNumber: boolean | null): this;
    withDisableStringNumberToNumber(disableStringNumberToNumber: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateScriptFromGitHubRequest;
    toDict(): {
        [key: string]: any;
    };
}
