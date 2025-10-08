import IResult from '../../core/interface/IResult';
import * as Gs2Schedule from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Schedule.Namespace | null;
    setItem(item: Gs2Schedule.Namespace | null): this;
    withItem(item: Gs2Schedule.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
