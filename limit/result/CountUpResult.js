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
import * as Gs2Limit from '../model';
var CountUpResult = /** @class */ (function () {
    function CountUpResult() {
        this.item = null;
    }
    CountUpResult.prototype.getItem = function () {
        return this.item;
    };
    CountUpResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    CountUpResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    CountUpResult.fromDict = function (data) {
        return new CountUpResult()
            .withItem(Gs2Limit.Counter.fromDict(data["item"]));
    };
    CountUpResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return CountUpResult;
}());
export default CountUpResult;
//# sourceMappingURL=CountUpResult.js.map