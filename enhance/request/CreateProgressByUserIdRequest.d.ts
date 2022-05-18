import IRequest from '../../core/interface/IRequest';
import * as Gs2Enhance from '../model';
export default class CreateProgressByUserIdRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private userId;
    private rateName;
    private targetItemSetId;
    private materials;
    private force;
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
    getRateName(): string | null;
    setRateName(rateName: string | null): this;
    withRateName(rateName: string | null): this;
    getTargetItemSetId(): string | null;
    setTargetItemSetId(targetItemSetId: string | null): this;
    withTargetItemSetId(targetItemSetId: string | null): this;
    getMaterials(): Gs2Enhance.Material[] | null;
    setMaterials(materials: Gs2Enhance.Material[] | null): this;
    withMaterials(materials: Gs2Enhance.Material[] | null): this;
    getForce(): boolean | null;
    setForce(force: boolean | null): this;
    withForce(force: boolean | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateProgressByUserIdRequest;
    toDict(): {
        [key: string]: any;
    };
}
