import IResult from '../../core/interface/IResult';
import * as Gs2Enchant from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Enchant.Namespace | null;
    setItem(item: Gs2Enchant.Namespace | null): this;
    withItem(item: Gs2Enchant.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
