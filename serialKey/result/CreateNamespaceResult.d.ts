import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2SerialKey.Namespace | null;
    setItem(item: Gs2SerialKey.Namespace | null): this;
    withItem(item: Gs2SerialKey.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
