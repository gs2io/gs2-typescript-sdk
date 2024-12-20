import IRequest from '../../core/interface/IRequest';
import * as Gs2Version from '../model';
export default class RejectByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private versionName;
    private userId;
    private version;
    private timeOffsetToken;
    private duplicationAvoider;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getVersionName(): string | null;
    setVersionName(versionName: string | null): this;
    withVersionName(versionName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getVersion(): Gs2Version.Version | null;
    setVersion(version: Gs2Version.Version | null): this;
    withVersion(version: Gs2Version.Version | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): RejectByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
