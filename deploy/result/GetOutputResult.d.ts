import IResult from '../../core/interface/IResult';
import * as Gs2Deploy from '../model';
export default class GetOutputResult implements IResult {
    private item;
    getItem(): Gs2Deploy.Output | null;
    setItem(item: Gs2Deploy.Output | null): this;
    withItem(item: Gs2Deploy.Output | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetOutputResult;
    toDict(): {
        [key: string]: any;
    };
}
