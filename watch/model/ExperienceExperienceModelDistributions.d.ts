import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceExperienceModelDistributions implements IModel {
    private addExperienceByUser;
    private addExperienceAmountByUser;
    private addRankCapByUser;
    private addRankCapAmountByUser;
    getAddExperienceByUser(): Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistribution | null;
    setAddExperienceByUser(addExperienceByUser: Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistribution | null): this;
    withAddExperienceByUser(addExperienceByUser: Gs2Watch.ExperienceExperienceModelAddExperienceByUserDistribution | null): this;
    getAddExperienceAmountByUser(): Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistribution | null;
    setAddExperienceAmountByUser(addExperienceAmountByUser: Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistribution | null): this;
    withAddExperienceAmountByUser(addExperienceAmountByUser: Gs2Watch.ExperienceExperienceModelAddExperienceAmountByUserDistribution | null): this;
    getAddRankCapByUser(): Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistribution | null;
    setAddRankCapByUser(addRankCapByUser: Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistribution | null): this;
    withAddRankCapByUser(addRankCapByUser: Gs2Watch.ExperienceExperienceModelAddRankCapByUserDistribution | null): this;
    getAddRankCapAmountByUser(): Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistribution | null;
    setAddRankCapAmountByUser(addRankCapAmountByUser: Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistribution | null): this;
    withAddRankCapAmountByUser(addRankCapAmountByUser: Gs2Watch.ExperienceExperienceModelAddRankCapAmountByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
