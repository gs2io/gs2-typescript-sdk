import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class GetNamespaceResult implements IResult {
    private item;
    getItem(): Gs2Experience.Namespace | null;
    setItem(item: Gs2Experience.Namespace | null): this;
    withItem(item: Gs2Experience.Namespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetNamespaceResult;
    toDict(): {
        [key: string]: any;
    };
}
