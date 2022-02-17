import IRequest from '../../core/interface/IRequest';
import * as Gs2Version from '../model';
export default class CheckVersionRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private targetVersions;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getTargetVersions(): Gs2Version.TargetVersion[] | null;
    setTargetVersions(targetVersions: Gs2Version.TargetVersion[] | null): this;
    withTargetVersions(targetVersions: Gs2Version.TargetVersion[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CheckVersionRequest;
    toDict(): {
        [key: string]: any;
    };
}
