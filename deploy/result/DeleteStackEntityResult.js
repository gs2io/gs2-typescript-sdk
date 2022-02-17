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
import * as Gs2Deploy from '../model';
var DeleteStackEntityResult = /** @class */ (function () {
    function DeleteStackEntityResult() {
        this.item = null;
    }
    DeleteStackEntityResult.prototype.getItem = function () {
        return this.item;
    };
    DeleteStackEntityResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DeleteStackEntityResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DeleteStackEntityResult.fromDict = function (data) {
        return new DeleteStackEntityResult()
            .withItem(Gs2Deploy.Stack.fromDict(data["item"]));
    };
    DeleteStackEntityResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return DeleteStackEntityResult;
}());
export { DeleteStackEntityResult };
//# sourceMappingURL=DeleteStackEntityResult.js.map