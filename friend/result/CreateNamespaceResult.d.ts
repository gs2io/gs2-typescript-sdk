import IResult from '../../core/interface/IResult';
import * as Gs2Friend from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Friend.Namespace | null;
    setItem(item: Gs2Friend.Namespace | null): this;
    withItem(item: Gs2Friend.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
