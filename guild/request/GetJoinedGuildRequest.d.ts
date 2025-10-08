import IRequest from '../../core/interface/IRequest';
export default class GetJoinedGuildRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private guildModelName;
    private guildName;
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
    getGuildModelName(): string | null;
    setGuildModelName(guildModelName: string | null): this;
    withGuildModelName(guildModelName: string | null): this;
    getGuildName(): string | null;
    setGuildName(guildName: string | null): this;
    withGuildName(guildName: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetJoinedGuildRequest;
    toDict(): {
        [key: string]: any;
    };
}
