import IRequest from '@/gs2/core/interface/IRequest';
import * as Gs2Deploy from '../model';
export declare class CreateStackFromGitHubRequest implements IRequest {
    private requestId;
    private contextStack;
    private name;
    private description;
    private checkoutSetting;
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
    getCheckoutSetting(): Gs2Deploy.GitHubCheckoutSetting | null;
    setCheckoutSetting(checkoutSetting: Gs2Deploy.GitHubCheckoutSetting | null): this;
    withCheckoutSetting(checkoutSetting: Gs2Deploy.GitHubCheckoutSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateStackFromGitHubRequest;
    toDict(): {
        [key: string]: any;
    };
}
