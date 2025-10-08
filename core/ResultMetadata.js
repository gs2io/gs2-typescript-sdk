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
var ResultMetadata = /** @class */ (function () {
    function ResultMetadata() {
        this.uncommitted = null;
    }
    ResultMetadata.prototype.getUncommitted = function () {
        return this.uncommitted;
    };
    ResultMetadata.prototype.setUncommitted = function (uncommitted) {
        this.uncommitted = uncommitted;
        return this;
    };
    ResultMetadata.prototype.withUncommitted = function (uncommitted) {
        this.uncommitted = uncommitted;
        return this;
    };
    ResultMetadata.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ResultMetadata()
            .withUncommitted(data["uncommitted"]);
    };
    ResultMetadata.prototype.toDict = function () {
        return {
            "uncommitted": this.getUncommitted(),
        };
    };
    return ResultMetadata;
}());
exports.default = ResultMetadata;
//# sourceMappingURL=ResultMetadata.js.map