import IRequest from '../../core/interface/IRequest';
import * as Gs2MegaField from '../model';
export default class PutPositionRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private accessToken;
    private areaModelName;
    private layerModelName;
    private position;
    private vector;
    private r;
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
    getAreaModelName(): string | null;
    setAreaModelName(areaModelName: string | null): this;
    withAreaModelName(areaModelName: string | null): this;
    getLayerModelName(): string | null;
    setLayerModelName(layerModelName: string | null): this;
    withLayerModelName(layerModelName: string | null): this;
    getPosition(): Gs2MegaField.Position | null;
    setPosition(position: Gs2MegaField.Position | null): this;
    withPosition(position: Gs2MegaField.Position | null): this;
    getVector(): Gs2MegaField.Vector | null;
    setVector(vector: Gs2MegaField.Vector | null): this;
    withVector(vector: Gs2MegaField.Vector | null): this;
    getR(): number | null;
    setR(r: number | null): this;
    withR(r: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutPositionRequest;
    toDict(): {
        [key: string]: any;
    };
}
