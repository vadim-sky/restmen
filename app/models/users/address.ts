/**
 * Created by vadimsky on 05/06/16.
 */

module users {
    export interface Address {
        state: string;
        country: string;
        city: string;
        longName: string;
        shortName: string;
    }
}
