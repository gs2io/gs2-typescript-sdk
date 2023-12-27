import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class AddGradeByUserIdResult implements IResult {
    private item;
    private experienceNamespaceName;
    private experienceStatus;
    getItem(): Gs2Grade.Status | null;
    setItem(item: Gs2Grade.Status | null): this;
    withItem(item: Gs2Grade.Status | null): this;
    getExperienceNamespaceName(): string | null;
    setExperienceNamespaceName(experienceNamespaceName: string | null): this;
    withExperienceNamespaceName(experienceNamespaceName: string | null): this;
    getExperienceStatus(): Gs2Grade.Status | null;
    setExperienceStatus(experienceStatus: Gs2Grade.Status | null): this;
    withExperienceStatus(experienceStatus: Gs2Grade.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AddGradeByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
