import IRequest from '../../core/interface/IRequest';
import * as Gs2MegaField from '../model';
export default class NearUserIdsFromSystemRequest implements IRequest {
    private requestId;
    private contextStack;
    private namespaceName;
    private areaModelName;
    private layerModelName;
    private point;
    private r;
    private limit;
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
    getAreaModelName(): string | null;
    setAreaModelName(areaModelName: string | null): this;
    withAreaModelName(areaModelName: string | null): this;
    getLayerModelName(): string | null;
    setLayerModelName(layerModelName: string | null): this;
    withLayerModelName(layerModelName: string | null): this;
    getPoint(): Gs2MegaField.Position | null;
    setPoint(point: Gs2MegaField.Position | null): this;
    withPoint(point: Gs2MegaField.Position | null): this;
    getR(): number | null;
    setR(r: number | null): this;
    withR(r: number | null): this;
    getLimit(): number | null;
    setLimit(limit: number | null): this;
    withLimit(limit: number | null): this;
    getDuplicationAvoider(): string | null;
    setDuplicationAvoider(duplicationAvoider: string | null): this;
    withDuplicationAvoider(duplicationAvoider: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): NearUserIdsFromSystemRequest;
    toDict(): {
        [key: string]: any;
    };
}
