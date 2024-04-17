import IRequest from '../../core/interface/IRequest';
import * as Gs2Buff from '../model';
export default class UpdateCurrentBuffMasterFromGitHubRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private checkoutSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getCheckoutSetting(): Gs2Buff.GitHubCheckoutSetting | null;
    setCheckoutSetting(checkoutSetting: Gs2Buff.GitHubCheckoutSetting | null): this;
    withCheckoutSetting(checkoutSetting: Gs2Buff.GitHubCheckoutSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentBuffMasterFromGitHubRequest;
    toDict(): {
        [key: string]: any;
    };
}
