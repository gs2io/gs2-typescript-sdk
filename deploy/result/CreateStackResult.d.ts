import IResult from '../../core/interface/IResult';
import * as Gs2Deploy from '../model';
export default class CreateStackResult implements IResult {
    private item;
    getItem(): Gs2Deploy.Stack | null;
    setItem(item: Gs2Deploy.Stack | null): this;
    withItem(item: Gs2Deploy.Stack | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateStackResult;
    toDict(): {
        [key: string]: any;
    };
}
