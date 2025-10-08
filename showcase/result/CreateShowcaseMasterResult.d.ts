import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class CreateShowcaseMasterResult implements IResult {
    private item;
    getItem(): Gs2Showcase.ShowcaseMaster | null;
    setItem(item: Gs2Showcase.ShowcaseMaster | null): this;
    withItem(item: Gs2Showcase.ShowcaseMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateShowcaseMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
