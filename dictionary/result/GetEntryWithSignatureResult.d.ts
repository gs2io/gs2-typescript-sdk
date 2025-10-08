import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class GetEntryWithSignatureResult implements IResult {
    private item;
    private body;
    private signature;
    getItem(): Gs2Dictionary.Entry | null;
    setItem(item: Gs2Dictionary.Entry | null): this;
    withItem(item: Gs2Dictionary.Entry | null): this;
    getBody(): string | null;
    setBody(body: string | null): this;
    withBody(body: string | null): this;
    getSignature(): string | null;
    setSignature(signature: string | null): this;
    withSignature(signature: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetEntryWithSignatureResult;
    toDict(): {
        [key: string]: any;
    };
}
