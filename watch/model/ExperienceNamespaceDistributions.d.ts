import IModel from '../../core/interface/IModel';
import ExperienceNamespaceAddExperienceByExperienceDistribution from './ExperienceNamespaceAddExperienceByExperienceDistribution';
import ExperienceNamespaceAddRankCapByExperienceDistribution from './ExperienceNamespaceAddRankCapByExperienceDistribution';
export default class ExperienceNamespaceDistributions implements IModel {
    private addExperienceByExperience;
    private addRankCapByExperience;
    getAddExperienceByExperience(): ExperienceNamespaceAddExperienceByExperienceDistribution | null;
    setAddExperienceByExperience(addExperienceByExperience: ExperienceNamespaceAddExperienceByExperienceDistribution | null): this;
    withAddExperienceByExperience(addExperienceByExperience: ExperienceNamespaceAddExperienceByExperienceDistribution | null): this;
    getAddRankCapByExperience(): ExperienceNamespaceAddRankCapByExperienceDistribution | null;
    setAddRankCapByExperience(addRankCapByExperience: ExperienceNamespaceAddRankCapByExperienceDistribution | null): this;
    withAddRankCapByExperience(addRankCapByExperience: ExperienceNamespaceAddRankCapByExperienceDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
