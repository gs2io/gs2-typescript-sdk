import IRequest from '../../core/interface/IRequest';
import * as Gs2Idle from '../model';
export default class UpdateCurrentCategoryMasterFromGitHubRequest implements IRequest {
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
    getCheckoutSetting(): Gs2Idle.GitHubCheckoutSetting | null;
    setCheckoutSetting(checkoutSetting: Gs2Idle.GitHubCheckoutSetting | null): this;
    withCheckoutSetting(checkoutSetting: Gs2Idle.GitHubCheckoutSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentCategoryMasterFromGitHubRequest;
    toDict(): {
        [key: string]: any;
    };
}
