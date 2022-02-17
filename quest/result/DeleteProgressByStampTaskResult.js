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
var DeleteProgressByStampTaskResult = /** @class */ (function () {
    function DeleteProgressByStampTaskResult() {
        this.item = null;
        this.newContextStack = null;
    }
    DeleteProgressByStampTaskResult.prototype.getItem = function () {
        return this.item;
    };
    DeleteProgressByStampTaskResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DeleteProgressByStampTaskResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DeleteProgressByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    DeleteProgressByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    DeleteProgressByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    DeleteProgressByStampTaskResult.fromDict = function (data) {
        return new DeleteProgressByStampTaskResult()
            .withItem(Gs2Quest.Progress.fromDict(data["item"]))
            .withNewContextStack(data["newContextStack"]);
    };
    DeleteProgressByStampTaskResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "newContextStack": this.getNewContextStack(),
        };
    };
    return DeleteProgressByStampTaskResult;
}());
export default DeleteProgressByStampTaskResult;
//# sourceMappingURL=DeleteProgressByStampTaskResult.js.map