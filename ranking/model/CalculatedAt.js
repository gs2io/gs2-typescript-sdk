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
var CalculatedAt = /** @class */ (function () {
    function CalculatedAt() {
        this.categoryName = null;
        this.calculatedAt = null;
    }
    CalculatedAt.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    CalculatedAt.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    CalculatedAt.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    CalculatedAt.prototype.getCalculatedAt = function () {
        return this.calculatedAt;
    };
    CalculatedAt.prototype.setCalculatedAt = function (calculatedAt) {
        this.calculatedAt = calculatedAt;
        return this;
    };
    CalculatedAt.prototype.withCalculatedAt = function (calculatedAt) {
        this.calculatedAt = calculatedAt;
        return this;
    };
    CalculatedAt.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CalculatedAt()
            .withCategoryName(data["categoryName"])
            .withCalculatedAt(data["calculatedAt"]);
    };
    CalculatedAt.prototype.toDict = function () {
        return {
            "categoryName": this.getCategoryName(),
            "calculatedAt": this.getCalculatedAt(),
        };
    };
    return CalculatedAt;
}());
export default CalculatedAt;
//# sourceMappingURL=CalculatedAt.js.map