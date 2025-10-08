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
var DecryptResult = /** @class */ (function () {
    function DecryptResult() {
        this.data = null;
    }
    DecryptResult.prototype.getData = function () {
        return this.data;
    };
    DecryptResult.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    DecryptResult.prototype.withData = function (data) {
        this.data = data;
        return this;
    };
    DecryptResult.fromDict = function (data) {
        return new DecryptResult()
            .withData(data["data"]);
    };
    DecryptResult.prototype.toDict = function () {
        return {
            "data": this.getData(),
        };
    };
    return DecryptResult;
}());
exports.default = DecryptResult;
//# sourceMappingURL=DecryptResult.js.map