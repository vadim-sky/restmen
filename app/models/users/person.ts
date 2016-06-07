
/**
 * Created by vadimsky on 03/06/16.
 */

module users {
    export interface Person {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        mobile: string;
        address: users.Address;
        // additional
        age?: number;
        gender?: string;
    }
}
