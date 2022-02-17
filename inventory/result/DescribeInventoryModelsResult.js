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
import * as Gs2Inventory from '../model';
var DescribeInventoryModelsResult = /** @class */ (function () {
    function DescribeInventoryModelsResult() {
        this.items = null;
    }
    DescribeInventoryModelsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeInventoryModelsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeInventoryModelsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeInventoryModelsResult.fromDict = function (data) {
        return new DescribeInventoryModelsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.InventoryModel.fromDict(item);
            }) : []);
    };
    DescribeInventoryModelsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DescribeInventoryModelsResult;
}());
export default DescribeInventoryModelsResult;
//# sourceMappingURL=DescribeInventoryModelsResult.js.map