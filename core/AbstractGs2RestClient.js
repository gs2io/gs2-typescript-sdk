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
var default_1 = /** @class */ (function () {
    function default_1(session) {
        this.session = session;
    }
    default_1.prototype.createAuthorizedHeaders = function () {
        return {
            'X-GS2-CLIENT-ID': this.session.credential.clientId,
            'Authorization': 'Bearer ' + this.session.projectToken,
        };
    };
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=AbstractGs2RestClient.js.map