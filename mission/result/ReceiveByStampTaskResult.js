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
import * as Gs2Mission from '../model';
var ReceiveByStampTaskResult = /** @class */ (function () {
    function ReceiveByStampTaskResult() {
        this.item = null;
        this.newContextStack = null;
    }
    ReceiveByStampTaskResult.prototype.getItem = function () {
        return this.item;
    };
    ReceiveByStampTaskResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveByStampTaskResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    ReceiveByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    ReceiveByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    ReceiveByStampTaskResult.fromDict = function (data) {
        return new ReceiveByStampTaskResult()
            .withItem(Gs2Mission.Complete.fromDict(data["item"]))
            .withNewContextStack(data["newContextStack"]);
    };
    ReceiveByStampTaskResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "newContextStack": this.getNewContextStack(),
        };
    };
    return ReceiveByStampTaskResult;
}());
export default ReceiveByStampTaskResult;
//# sourceMappingURL=ReceiveByStampTaskResult.js.map