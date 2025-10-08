import IResult from '../../core/interface/IResult';
import * as Gs2Key from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Key.Namespace | null;
    setItem(item: Gs2Key.Namespace | null): this;
    withItem(item: Gs2Key.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
