import IRequest from '../../core/interface/IRequest';
export default class CheckImportUserDataByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private userId;
    private uploadToken;
    private timeOffsetToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getUploadToken(): string | null;
    setUploadToken(uploadToken: string | null): this;
    withUploadToken(uploadToken: string | null): this;
    getTimeOffsetToken(): string | null;
    setTimeOffsetToken(timeOffsetToken: string | null): this;
    withTimeOffsetToken(timeOffsetToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CheckImportUserDataByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
