import IResult from '../../core/interface/IResult';
import * as Gs2Buff from '../model';
export default class DeleteNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Buff.Namespace | null;
    setItem(item: Gs2Buff.Namespace | null): this;
    withItem(item: Gs2Buff.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
