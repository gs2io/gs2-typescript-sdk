import IRequest from '../../core/interface/IRequest';
import * as Gs2Gateway from '../model';
export default class UpdateNamespaceRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private description;
    private firebaseSecret;
    private logSetting;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getDescription(): string | null;
    setDescription(description: string | null): this;
    withDescription(description: string | null): this;
    getFirebaseSecret(): string | null;
    setFirebaseSecret(firebaseSecret: string | null): this;
    withFirebaseSecret(firebaseSecret: string | null): this;
    getLogSetting(): Gs2Gateway.LogSetting | null;
    setLogSetting(logSetting: Gs2Gateway.LogSetting | null): this;
    withLogSetting(logSetting: Gs2Gateway.LogSetting | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceRequest;
    toDict(): {
        [key: string]: any;
    };
}
