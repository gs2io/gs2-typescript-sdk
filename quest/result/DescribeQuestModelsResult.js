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
import * as Gs2Quest from '../model';
var DescribeQuestModelsResult = /** @class */ (function () {
    function DescribeQuestModelsResult() {
        this.items = null;
    }
    DescribeQuestModelsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeQuestModelsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeQuestModelsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeQuestModelsResult.fromDict = function (data) {
        return new DescribeQuestModelsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Quest.QuestModel.fromDict(item);
            }) : []);
    };
    DescribeQuestModelsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DescribeQuestModelsResult;
}());
export default DescribeQuestModelsResult;
//# sourceMappingURL=DescribeQuestModelsResult.js.map