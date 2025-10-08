import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class DescribeExperienceModelsResult implements IResult {
    private items;
    getItems(): Gs2Experience.ExperienceModel[] | null;
    setItems(items: Gs2Experience.ExperienceModel[] | null): this;
    withItems(items: Gs2Experience.ExperienceModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeExperienceModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
