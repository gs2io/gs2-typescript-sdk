import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class SubExperienceByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Experience.Status | null;
    setItem(item: Gs2Experience.Status | null): this;
    withItem(item: Gs2Experience.Status | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SubExperienceByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
