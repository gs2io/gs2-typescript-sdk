/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
import * as Gs2Experience from '../model';
var DescribeExperienceModelsResult = /** @class */ (function () {
    function DescribeExperienceModelsResult() {
        this.items = null;
    }
    DescribeExperienceModelsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeExperienceModelsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeExperienceModelsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeExperienceModelsResult.fromDict = function (data) {
        return new DescribeExperienceModelsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Experience.ExperienceModel.fromDict(item);
            }) : []);
    };
    DescribeExperienceModelsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DescribeExperienceModelsResult;
}());
export default DescribeExperienceModelsResult;
//# sourceMappingURL=DescribeExperienceModelsResult.js.map