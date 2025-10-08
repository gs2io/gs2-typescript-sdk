import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class GetStatusWithSignatureByUserIdResult implements IResult {
    private item;
    private body;
    private signature;
    getItem(): Gs2Experience.Status | null;
    setItem(item: Gs2Experience.Status | null): this;
    withItem(item: Gs2Experience.Status | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStatusWithSignatureByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
