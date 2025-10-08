import IRequest from '../../core/interface/IRequest';
export default class UpdateMemberRoleRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private guildModelName;
    private accessToken;
    private targetUserId;
    private roleName;
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
    getGuildModelName(): string | null;
    setGuildModelName(guildModelName: string | null): this;
    withGuildModelName(guildModelName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getTargetUserId(): string | null;
    setTargetUserId(targetUserId: string | null): this;
    withTargetUserId(targetUserId: string | null): this;
    getRoleName(): string | null;
    setRoleName(roleName: string | null): this;
    withRoleName(roleName: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateMemberRoleRequest;
    toDict(): {
        [key: string]: any;
    };
}
