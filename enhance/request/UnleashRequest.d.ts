import IRequest from '../../core/interface/IRequest';
import * as Gs2Enhance from '../model';
export default class UnleashRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private rateName;
    private accessToken;
    private targetItemSetId;
    private materials;
    private config;
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
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getTargetItemSetId(): string | null;
    setTargetItemSetId(targetItemSetId: string | null): this;
    withTargetItemSetId(targetItemSetId: string | null): this;
    getMaterials(): string[] | null;
    setMaterials(materials: string[] | null): this;
    withMaterials(materials: string[] | null): this;
    getConfig(): Gs2Enhance.Config[] | null;
    setConfig(config: Gs2Enhance.Config[] | null): this;
    withConfig(config: Gs2Enhance.Config[] | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnleashRequest;
    toDict(): {
        [key: string]: any;
    };
}
