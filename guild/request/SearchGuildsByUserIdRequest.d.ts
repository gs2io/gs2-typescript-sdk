import IRequest from '../../core/interface/IRequest';
export default class SearchGuildsByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private guildModelName;
    private userId;
    private displayName;
    private attributes1;
    private attributes2;
    private attributes3;
    private attributes4;
    private attributes5;
    private joinPolicies;
    private includeFullMembersGuild;
    private orderBy;
    private pageToken;
    private limit;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getDisplayName(): string | null;
    setDisplayName(displayName: string | null): this;
    withDisplayName(displayName: string | null): this;
    getAttributes1(): number[] | null;
    setAttributes1(attributes1: number[] | null): this;
    withAttributes1(attributes1: number[] | null): this;
    getAttributes2(): number[] | null;
    setAttributes2(attributes2: number[] | null): this;
    withAttributes2(attributes2: number[] | null): this;
    getAttributes3(): number[] | null;
    setAttributes3(attributes3: number[] | null): this;
    withAttributes3(attributes3: number[] | null): this;
    getAttributes4(): number[] | null;
    setAttributes4(attributes4: number[] | null): this;
    withAttributes4(attributes4: number[] | null): this;
    getAttributes5(): number[] | null;
    setAttributes5(attributes5: number[] | null): this;
    withAttributes5(attributes5: number[] | null): this;
    getJoinPolicies(): string[] | null;
    setJoinPolicies(joinPolicies: string[] | null): this;
    withJoinPolicies(joinPolicies: string[] | null): this;
    getIncludeFullMembersGuild(): boolean | null;
    setIncludeFullMembersGuild(includeFullMembersGuild: boolean | null): this;
    withIncludeFullMembersGuild(includeFullMembersGuild: boolean | null): this;
    getOrderBy(): string | null;
    setOrderBy(orderBy: string | null): this;
    withOrderBy(orderBy: string | null): this;
    getPageToken(): string | null;
    setPageToken(pageToken: string | null): this;
    withPageToken(pageToken: string | null): this;
    getLimit(): number | null;
    setLimit(limit: number | null): this;
    withLimit(limit: number | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SearchGuildsByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
