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
var EncryptResult = /** @class */ (function () {
    function EncryptResult() {
        this.data = null;
    }
    EncryptResult.prototype.getData = function () {
        return this.data;
    };
    EncryptResult.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    EncryptResult.prototype.withData = function (data) {
        this.data = data;
        return this;
    };
    EncryptResult.fromDict = function (data) {
        return new EncryptResult()
            .withData(data["data"]);
    };
    EncryptResult.prototype.toDict = function () {
        return {
            "data": this.getData(),
        };
    };
    return EncryptResult;
}());
export default EncryptResult;
//# sourceMappingURL=EncryptResult.js.map