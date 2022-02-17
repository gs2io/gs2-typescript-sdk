import IResult from '../../core/interface/IResult';
import * as Gs2Realtime from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Realtime.Namespace | null;
    setItem(item: Gs2Realtime.Namespace | null): this;
    withItem(item: Gs2Realtime.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
