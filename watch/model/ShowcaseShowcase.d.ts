import IModel from '../../core/interface/IModel';
import ShowcaseDisplayItem from './ShowcaseDisplayItem';
export default class ShowcaseShowcase implements IModel {
    private name;
    private displayItem;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getDisplayItem(): ShowcaseDisplayItem[] | null;
    setDisplayItem(displayItem: ShowcaseDisplayItem[] | null): this;
    withDisplayItem(displayItem: ShowcaseDisplayItem[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ShowcaseShowcase | null;
    toDict(): {
        [key: string]: any;
    };
}
