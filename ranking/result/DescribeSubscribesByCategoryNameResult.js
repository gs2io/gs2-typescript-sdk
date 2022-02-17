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
import * as Gs2Ranking from '../model';
var DescribeSubscribesByCategoryNameResult = /** @class */ (function () {
    function DescribeSubscribesByCategoryNameResult() {
        this.items = null;
    }
    DescribeSubscribesByCategoryNameResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeSubscribesByCategoryNameResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSubscribesByCategoryNameResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSubscribesByCategoryNameResult.fromDict = function (data) {
        return new DescribeSubscribesByCategoryNameResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Ranking.SubscribeUser.fromDict(item);
            }) : []);
    };
    DescribeSubscribesByCategoryNameResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DescribeSubscribesByCategoryNameResult;
}());
export default DescribeSubscribesByCategoryNameResult;
//# sourceMappingURL=DescribeSubscribesByCategoryNameResult.js.map