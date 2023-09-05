import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class SetRankCapByUserIdResult implements IResult {
    private item;
    private old;
    getItem(): Gs2Experience.Status | null;
    setItem(item: Gs2Experience.Status | null): this;
    withItem(item: Gs2Experience.Status | null): this;
    getOld(): Gs2Experience.Status | null;
    setOld(old: Gs2Experience.Status | null): this;
    withOld(old: Gs2Experience.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetRankCapByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
