import IRequest from '../../core/interface/IRequest';
import * as Gs2Formation from '../model';
export default class SetPropertyFormWithSignatureRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private formModelName;
    private propertyId;
    private slots;
    private keyId;
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
    getAccessToken(): string | null;
    setAccessToken(accessToken: string | null): this;
    withAccessToken(accessToken: string | null): this;
    getFormModelName(): string | null;
    setFormModelName(formModelName: string | null): this;
    withFormModelName(formModelName: string | null): this;
    getPropertyId(): string | null;
    setPropertyId(propertyId: string | null): this;
    withPropertyId(propertyId: string | null): this;
    getSlots(): Gs2Formation.SlotWithSignature[] | null;
    setSlots(slots: Gs2Formation.SlotWithSignature[] | null): this;
    withSlots(slots: Gs2Formation.SlotWithSignature[] | null): this;
    getKeyId(): string | null;
    setKeyId(keyId: string | null): this;
    withKeyId(keyId: string | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetPropertyFormWithSignatureRequest;
    toDict(): {
        [key: string]: any;
    };
}
