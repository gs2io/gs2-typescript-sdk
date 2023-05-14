import IModel from '../../core/interface/IModel';
import ExperienceExperience from './ExperienceExperience';
export default class ExperienceNamespace implements IModel {
    private namespaceName;
    private experience;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getExperience(): ExperienceExperience[] | null;
    setExperience(experience: ExperienceExperience[] | null): this;
    withExperience(experience: ExperienceExperience[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
