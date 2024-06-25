import IRequest from '../../core/interface/IRequest';
import * as Gs2Money2 from '../model';
export default class UpdateStoreContentModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private contentName;
    private description;
    private metadata;
    private appleAppStore;
    private googlePlay;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getContentName(): string | null;
    setContentName(contentName: string | null): this;
    withContentName(contentName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getAppleAppStore(): Gs2Money2.AppleAppStoreContent | null;
    setAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreContent | null): this;
    withAppleAppStore(appleAppStore: Gs2Money2.AppleAppStoreContent | null): this;
    getGooglePlay(): Gs2Money2.GooglePlayContent | null;
    setGooglePlay(googlePlay: Gs2Money2.GooglePlayContent | null): this;
    withGooglePlay(googlePlay: Gs2Money2.GooglePlayContent | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateStoreContentModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
