"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var FreezeMasterDataByUserIdResult = /** @class */ (function () {
    function FreezeMasterDataByUserIdResult() {
        this.newContextStack = null;
    }
    FreezeMasterDataByUserIdResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    FreezeMasterDataByUserIdResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    FreezeMasterDataByUserIdResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    FreezeMasterDataByUserIdResult.fromDict = function (data) {
        return new FreezeMasterDataByUserIdResult()
            .withNewContextStack(data["newContextStack"]);
    };
    FreezeMasterDataByUserIdResult.prototype.toDict = function () {
        return {
            "newContextStack": this.getNewContextStack(),
        };
    };
    return FreezeMasterDataByUserIdResult;
}());
exports.default = FreezeMasterDataByUserIdResult;
//# sourceMappingURL=FreezeMasterDataByUserIdResult.js.map