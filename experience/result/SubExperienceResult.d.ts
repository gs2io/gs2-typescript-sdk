import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class SubExperienceResult implements IResult {
    private item;
    getItem(): Gs2Experience.Status | null;
    setItem(item: Gs2Experience.Status | null): this;
    withItem(item: Gs2Experience.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SubExperienceResult;
    toDict(): {
        [key: string]: any;
    };
}
