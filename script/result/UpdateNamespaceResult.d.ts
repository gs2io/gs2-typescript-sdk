import IResult from '../../core/interface/IResult';
import * as Gs2Script from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Script.Namespace | null;
    setItem(item: Gs2Script.Namespace | null): this;
    withItem(item: Gs2Script.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
