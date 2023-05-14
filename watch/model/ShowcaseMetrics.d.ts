import IModel from '../../core/interface/IModel';
import ShowcaseNamespace from './ShowcaseNamespace';
export default class ShowcaseMetrics implements IModel {
    private namespaces;
    getNamespaces(): ShowcaseNamespace[] | null;
    setNamespaces(namespaces: ShowcaseNamespace[] | null): this;
    withNamespaces(namespaces: ShowcaseNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
