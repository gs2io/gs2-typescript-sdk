import IRequest from '../../core/interface/IRequest';
import * as Gs2Account from '../model';
export default class CreateTakeOverTypeModelMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private type;
    private description;
    private metadata;
    private openIdConnectSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getType(): number | null;
    setType(type: number | null): this;
    withType(type: number | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getMetadata(): string | null;
    setMetadata(metadata: string | null): this;
    withMetadata(metadata: string | null): this;
    getOpenIdConnectSetting(): Gs2Account.OpenIdConnectSetting | null;
    setOpenIdConnectSetting(openIdConnectSetting: Gs2Account.OpenIdConnectSetting | null): this;
    withOpenIdConnectSetting(openIdConnectSetting: Gs2Account.OpenIdConnectSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateTakeOverTypeModelMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
