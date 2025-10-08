import IRequest from '../../core/interface/IRequest';
import * as Gs2Guild from '../model';
export default class BatchUpdateMemberRoleRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private guildModelName;
    private accessToken;
    private members;
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
    getMembers(): Gs2Guild.Member[] | null;
    setMembers(members: Gs2Guild.Member[] | null): this;
    withMembers(members: Gs2Guild.Member[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BatchUpdateMemberRoleRequest;
    toDict(): {
        [key: string]: any;
    };
}
