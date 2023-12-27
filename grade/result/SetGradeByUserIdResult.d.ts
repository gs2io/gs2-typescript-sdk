import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class SetGradeByUserIdResult implements IResult {
    private item;
    private old;
    private experienceNamespaceName;
    private experienceStatus;
    getItem(): Gs2Grade.Status | null;
    setItem(item: Gs2Grade.Status | null): this;
    withItem(item: Gs2Grade.Status | null): this;
    getOld(): Gs2Grade.Status | null;
    setOld(old: Gs2Grade.Status | null): this;
    withOld(old: Gs2Grade.Status | null): this;
    getExperienceNamespaceName(): string | null;
    setExperienceNamespaceName(experienceNamespaceName: string | null): this;
    withExperienceNamespaceName(experienceNamespaceName: string | null): this;
    getExperienceStatus(): Gs2Grade.Status | null;
    setExperienceStatus(experienceStatus: Gs2Grade.Status | null): this;
    withExperienceStatus(experienceStatus: Gs2Grade.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SetGradeByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
