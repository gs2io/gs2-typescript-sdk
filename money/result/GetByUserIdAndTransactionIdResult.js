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
import * as Gs2Money from '../model';
var GetByUserIdAndTransactionIdResult = /** @class */ (function () {
    function GetByUserIdAndTransactionIdResult() {
        this.item = null;
    }
    GetByUserIdAndTransactionIdResult.prototype.getItem = function () {
        return this.item;
    };
    GetByUserIdAndTransactionIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetByUserIdAndTransactionIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetByUserIdAndTransactionIdResult.fromDict = function (data) {
        return new GetByUserIdAndTransactionIdResult()
            .withItem(Gs2Money.Receipt.fromDict(data["item"]));
    };
    GetByUserIdAndTransactionIdResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return GetByUserIdAndTransactionIdResult;
}());
export default GetByUserIdAndTransactionIdResult;
//# sourceMappingURL=GetByUserIdAndTransactionIdResult.js.map