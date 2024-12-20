import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class ExperienceNamespaceDistributions implements IModel {
    private addExperienceByExperience;
    private addRankCapByExperience;
    getAddExperienceByExperience(): Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistribution | null;
    setAddExperienceByExperience(addExperienceByExperience: Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistribution | null): this;
    withAddExperienceByExperience(addExperienceByExperience: Gs2Watch.ExperienceNamespaceAddExperienceByExperienceDistribution | null): this;
    getAddRankCapByExperience(): Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistribution | null;
    setAddRankCapByExperience(addRankCapByExperience: Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistribution | null): this;
    withAddRankCapByExperience(addRankCapByExperience: Gs2Watch.ExperienceNamespaceAddRankCapByExperienceDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
