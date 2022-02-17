import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class CreateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Enhance.Namespace | null;
    setItem(item: Gs2Enhance.Namespace | null): this;
    withItem(item: Gs2Enhance.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
