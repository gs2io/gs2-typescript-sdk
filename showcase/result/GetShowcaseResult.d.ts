import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class GetShowcaseResult implements IResult {
    private item;
    getItem(): Gs2Showcase.Showcase | null;
    setItem(item: Gs2Showcase.Showcase | null): this;
    withItem(item: Gs2Showcase.Showcase | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetShowcaseResult;
    toDict(): {
        [key: string]: any;
    };
}
