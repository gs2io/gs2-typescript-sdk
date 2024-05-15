import IRequest from '../../core/interface/IRequest';
export default class GetReceiveRequestByGuildNameRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private guildModelName;
    private guildName;
    private fromUserId;
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
    getFromUserId(): string | null;
    setFromUserId(fromUserId: string | null): this;
    withFromUserId(fromUserId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetReceiveRequestByGuildNameRequest;
    toDict(): {
        [key: string]: any;
    };
}
