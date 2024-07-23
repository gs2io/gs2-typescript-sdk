import IRequest from '../../core/interface/IRequest';
export default class DeleteIgnoreUserByGuildNameRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private guildModelName;
    private guildName;
    private userId;
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
    getGuildModelName(): string | null;
    setGuildModelName(guildModelName: string | null): this;
    withGuildModelName(guildModelName: string | null): this;
    getGuildName(): string | null;
    setGuildName(guildName: string | null): this;
    withGuildName(guildName: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteIgnoreUserByGuildNameRequest;
    toDict(): {
        [key: string]: any;
    };
}
