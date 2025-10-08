import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class GetCurrentShowcaseMasterResult implements IResult {
    private item;
    getItem(): Gs2Showcase.CurrentShowcaseMaster | null;
    setItem(item: Gs2Showcase.CurrentShowcaseMaster | null): this;
    withItem(item: Gs2Showcase.CurrentShowcaseMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentShowcaseMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
