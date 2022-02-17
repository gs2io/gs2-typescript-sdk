import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class UpdateNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Mission.Namespace | null;
    setItem(item: Gs2Mission.Namespace | null): this;
    withItem(item: Gs2Mission.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
