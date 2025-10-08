import IRequest from '../../core/interface/IRequest';
export default class GetGuildModelRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private guildModelName;
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
    static fromDict(data: {
        [key: string]: any;
    }): GetGuildModelRequest;
    toDict(): {
        [key: string]: any;
    };
}
