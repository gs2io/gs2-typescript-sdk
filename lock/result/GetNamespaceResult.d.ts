import IResult from '../../core/interface/IResult';
import * as Gs2Lock from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Lock.Namespace | null;
    setItem(item: Gs2Lock.Namespace | null): this;
    withItem(item: Gs2Lock.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
