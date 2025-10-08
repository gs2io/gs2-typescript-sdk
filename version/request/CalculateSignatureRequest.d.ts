import IRequest from '../../core/interface/IRequest';
import * as Gs2Version from '../model';
export default class CalculateSignatureRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private versionName;
    private version;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getVersionName(): string | null;
    setVersionName(versionName: string | null): this;
    withVersionName(versionName: string | null): this;
    getVersion(): Gs2Version.Version | null;
    setVersion(version: Gs2Version.Version | null): this;
    withVersion(version: Gs2Version.Version | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CalculateSignatureRequest;
    toDict(): {
        [key: string]: any;
    };
}
