import IModel from '../../core/interface/IModel';
import ExperienceExperienceModelAddExperienceByUserDistribution from './ExperienceExperienceModelAddExperienceByUserDistribution';
import ExperienceExperienceModelAddExperienceAmountByUserDistribution from './ExperienceExperienceModelAddExperienceAmountByUserDistribution';
import ExperienceExperienceModelAddRankCapByUserDistribution from './ExperienceExperienceModelAddRankCapByUserDistribution';
import ExperienceExperienceModelAddRankCapAmountByUserDistribution from './ExperienceExperienceModelAddRankCapAmountByUserDistribution';
export default class ExperienceExperienceModelDistributions implements IModel {
    private addExperienceByUser;
    private addExperienceAmountByUser;
    private addRankCapByUser;
    private addRankCapAmountByUser;
    getAddExperienceByUser(): ExperienceExperienceModelAddExperienceByUserDistribution | null;
    setAddExperienceByUser(addExperienceByUser: ExperienceExperienceModelAddExperienceByUserDistribution | null): this;
    withAddExperienceByUser(addExperienceByUser: ExperienceExperienceModelAddExperienceByUserDistribution | null): this;
    getAddExperienceAmountByUser(): ExperienceExperienceModelAddExperienceAmountByUserDistribution | null;
    setAddExperienceAmountByUser(addExperienceAmountByUser: ExperienceExperienceModelAddExperienceAmountByUserDistribution | null): this;
    withAddExperienceAmountByUser(addExperienceAmountByUser: ExperienceExperienceModelAddExperienceAmountByUserDistribution | null): this;
    getAddRankCapByUser(): ExperienceExperienceModelAddRankCapByUserDistribution | null;
    setAddRankCapByUser(addRankCapByUser: ExperienceExperienceModelAddRankCapByUserDistribution | null): this;
    withAddRankCapByUser(addRankCapByUser: ExperienceExperienceModelAddRankCapByUserDistribution | null): this;
    getAddRankCapAmountByUser(): ExperienceExperienceModelAddRankCapAmountByUserDistribution | null;
    setAddRankCapAmountByUser(addRankCapAmountByUser: ExperienceExperienceModelAddRankCapAmountByUserDistribution | null): this;
    withAddRankCapAmountByUser(addRankCapAmountByUser: ExperienceExperienceModelAddRankCapAmountByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceExperienceModelDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
