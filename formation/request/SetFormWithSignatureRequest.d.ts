import IRequest from '../../core/interface/IRequest';
import * as Gs2Formation from '../model';
export default class SetFormWithSignatureRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private moldName;
    private index;
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
    getMoldName(): string | null;
    setMoldName(moldName: string | null): this;
    withMoldName(moldName: string | null): this;
    getIndex(): number | null;
    setIndex(index: number | null): this;
    withIndex(index: number | null): this;
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
    }): SetFormWithSignatureRequest;
    toDict(): {
        [key: string]: any;
    };
}
