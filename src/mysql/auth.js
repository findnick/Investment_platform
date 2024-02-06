export class AuthService {
    // user account registration
    account = "";
    async createAccount({
        username,
        password,
        email,
        fullName,
        dateOfBirth,
        nationality,
        govt_id,
        registration_Date
    }) {
        try {
            this.account = await fetch('URL_TO_REGISTER_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password,
                    email,
                    fullName,
                    dateOfBirth,
                    nationality,
                    govt_id,
                    registration_Date
                })
            });
            if (this.account.ok) {
                // call another method
            } else {
                return account.json(); // Return error response
            }
        } catch (error) {
            console.error('Error creating account:', error);
            throw error; // Re-throw error to be handled by caller
        }
    }

    // user account login
    async login({ email, password }) {
        try {
            return await this.account.fetch('login-api-endpoint');
            if (account) {
                // call another method
            }
        } catch (error) {
            throw error
        }
    }

    // get currentUser
    async currentUser({ email }) {
        try {
            const user = fetch('user-detail-api-endpoint');
            return user;
        } catch (error) {
            throw error
        }
    }

    async logout() {
        // logging out the current User
    }
}

export const authService = new AuthService();