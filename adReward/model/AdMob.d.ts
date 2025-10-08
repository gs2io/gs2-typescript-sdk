import IModel from '../../core/interface/IModel';
export default class AdMob implements IModel {
    private allowAdUnitIds;
    getAllowAdUnitIds(): string[] | null;
    setAllowAdUnitIds(allowAdUnitIds: string[] | null): this;
    withAllowAdUnitIds(allowAdUnitIds: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AdMob | null;
    toDict(): {
        [key: string]: any;
    };
}
