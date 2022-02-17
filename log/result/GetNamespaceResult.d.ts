import IResult from '../../core/interface/IResult';
import * as Gs2Log from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Log.Namespace | null;
    setItem(item: Gs2Log.Namespace | null): this;
    withItem(item: Gs2Log.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
