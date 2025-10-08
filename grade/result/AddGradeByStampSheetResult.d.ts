import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
import * as Gs2Experience from '../../experience/model';
export default class AddGradeByStampSheetResult implements IResult {
    private item;
    private experienceNamespaceName;
    private experienceStatus;
    getItem(): Gs2Grade.Status | null;
    setItem(item: Gs2Grade.Status | null): this;
    withItem(item: Gs2Grade.Status | null): this;
    getExperienceNamespaceName(): string | null;
    setExperienceNamespaceName(experienceNamespaceName: string | null): this;
    withExperienceNamespaceName(experienceNamespaceName: string | null): this;
    getExperienceStatus(): Gs2Experience.Status | null;
    setExperienceStatus(experienceStatus: Gs2Experience.Status | null): this;
    withExperienceStatus(experienceStatus: Gs2Experience.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddGradeByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
