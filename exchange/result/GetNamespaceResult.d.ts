import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Exchange.Namespace | null;
    setItem(item: Gs2Exchange.Namespace | null): this;
    withItem(item: Gs2Exchange.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
