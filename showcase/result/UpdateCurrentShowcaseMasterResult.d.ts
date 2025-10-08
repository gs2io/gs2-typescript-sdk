import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class UpdateCurrentShowcaseMasterResult implements IResult {
    private item;
    getItem(): Gs2Showcase.CurrentShowcaseMaster | null;
    setItem(item: Gs2Showcase.CurrentShowcaseMaster | null): this;
    withItem(item: Gs2Showcase.CurrentShowcaseMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentShowcaseMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
