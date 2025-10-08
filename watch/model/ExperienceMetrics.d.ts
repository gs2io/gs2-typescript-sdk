import IModel from '../../core/interface/IModel';
import ExperienceNamespace from './ExperienceNamespace';
export default class ExperienceMetrics implements IModel {
    private namespaces;
    getNamespaces(): ExperienceNamespace[] | null;
    setNamespaces(namespaces: ExperienceNamespace[] | null): this;
    withNamespaces(namespaces: ExperienceNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExperienceMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
