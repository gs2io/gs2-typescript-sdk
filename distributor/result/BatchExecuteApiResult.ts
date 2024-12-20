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

import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model'

export default class BatchExecuteApiResult implements IResult {
    private results: Gs2Distributor.BatchResultPayload[]|null = null;

    public getResults(): Gs2Distributor.BatchResultPayload[]|null {
        return this.results;
    }

    public setResults(results: Gs2Distributor.BatchResultPayload[]|null) {
        this.results = results;
        return this;
    }

    public withResults(results: Gs2Distributor.BatchResultPayload[]|null): this {
        this.results = results;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): BatchExecuteApiResult {
        return new BatchExecuteApiResult()
            .withResults(data.results ?
                data.results.map((item: {[key: string]: any}) => {
                    return Gs2Distributor.BatchResultPayload.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "results": this.getResults() ?
                this.getResults()!.map((item: Gs2Distributor.BatchResultPayload) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
