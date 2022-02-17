import IRequest from '../../core/interface/IRequest';
import * as Gs2Formation from '../model';
export default class UpdateCurrentFormMasterFromGitHubRequest implements IRequest {
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
    getCheckoutSetting(): Gs2Formation.GitHubCheckoutSetting | null;
    setCheckoutSetting(checkoutSetting: Gs2Formation.GitHubCheckoutSetting | null): this;
    withCheckoutSetting(checkoutSetting: Gs2Formation.GitHubCheckoutSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentFormMasterFromGitHubRequest;
    toDict(): {
        [key: string]: any;
    };
}
