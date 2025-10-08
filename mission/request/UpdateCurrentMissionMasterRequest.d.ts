import IRequest from '../../core/interface/IRequest';
export default class UpdateCurrentMissionMasterRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private mode;
    private settings;
    private uploadToken;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getMode(): string | null;
    setMode(mode: string | null): this;
    withMode(mode: string | null): this;
    getSettings(): string | null;
    setSettings(settings: string | null): this;
    withSettings(settings: string | null): this;
    getUploadToken(): string | null;
    setUploadToken(uploadToken: string | null): this;
    withUploadToken(uploadToken: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentMissionMasterRequest;
    toDict(): {
        [key: string]: any;
    };
}
