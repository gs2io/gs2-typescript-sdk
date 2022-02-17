import IResult from '../../core/interface/IResult';
import * as Gs2Inventory from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Inventory.Namespace | null;
    setItem(item: Gs2Inventory.Namespace | null): this;
    withItem(item: Gs2Inventory.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
