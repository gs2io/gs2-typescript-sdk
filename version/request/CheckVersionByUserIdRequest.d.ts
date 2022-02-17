import IRequest from '../../core/interface/IRequest';
import * as Gs2Version from '../model';
export default class CheckVersionByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTargetVersions(): Gs2Version.TargetVersion[] | null;
    setTargetVersions(targetVersions: Gs2Version.TargetVersion[] | null): this;
    withTargetVersions(targetVersions: Gs2Version.TargetVersion[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CheckVersionByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
