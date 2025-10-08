import IRequest from '../../core/interface/IRequest';
import * as Gs2StateMachine from '../model';
export default class ReportByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private statusName;
    private events;
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
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getStatusName(): string | null;
    setStatusName(statusName: string | null): this;
    withStatusName(statusName: string | null): this;
    getEvents(): Gs2StateMachine.Event[] | null;
    setEvents(events: Gs2StateMachine.Event[] | null): this;
    withEvents(events: Gs2StateMachine.Event[] | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReportByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
