import IResult from '../../core/interface/IResult';
import * as Gs2Idle from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Idle.Namespace | null;
    setItem(item: Gs2Idle.Namespace | null): this;
    withItem(item: Gs2Idle.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
