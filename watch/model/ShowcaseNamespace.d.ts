import IModel from '../../core/interface/IModel';
import ShowcaseShowcase from './ShowcaseShowcase';
export default class ShowcaseNamespace implements IModel {
    private namespaceName;
    private showcase;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getShowcase(): ShowcaseShowcase[] | null;
    setShowcase(showcase: ShowcaseShowcase[] | null): this;
    withShowcase(showcase: ShowcaseShowcase[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
