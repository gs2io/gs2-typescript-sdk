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
import * as Gs2Dictionary from '../model';
var DescribeEntryModelsResult = /** @class */ (function () {
    function DescribeEntryModelsResult() {
        this.items = null;
    }
    DescribeEntryModelsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeEntryModelsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeEntryModelsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeEntryModelsResult.fromDict = function (data) {
        return new DescribeEntryModelsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Dictionary.EntryModel.fromDict(item);
            }) : []);
    };
    DescribeEntryModelsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DescribeEntryModelsResult;
}());
export default DescribeEntryModelsResult;
//# sourceMappingURL=DescribeEntryModelsResult.js.map