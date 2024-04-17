import IResult from '../../core/interface/IResult';
import * as Gs2Buff from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Buff.Namespace | null;
    setItem(item: Gs2Buff.Namespace | null): this;
    withItem(item: Gs2Buff.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
