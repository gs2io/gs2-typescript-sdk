import IModel from '../../core/interface/IModel';
import * as Gs2Enhance from '../../enhance/model';
export default class UnleashRateEntryModel implements IModel {
    private gradeValue;
    private type;
    private needCount;
    private recipes;
    getGradeValue(): number | null;
    setGradeValue(gradeValue: number | null): this;
    withGradeValue(gradeValue: number | null): this;
    getType(): string | null;
    setType(type: string | null): this;
    withType(type: string | null): this;
    getNeedCount(): number | null;
    setNeedCount(needCount: number | null): this;
    withNeedCount(needCount: number | null): this;
    getRecipes(): Gs2Enhance.UnleashRecipe[] | null;
    setRecipes(recipes: Gs2Enhance.UnleashRecipe[] | null): this;
    withRecipes(recipes: Gs2Enhance.UnleashRecipe[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UnleashRateEntryModel | null;
    toDict(): {
        [key: string]: any;
    };
}
