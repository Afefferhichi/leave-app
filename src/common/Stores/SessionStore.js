import AsyncStorage from '@react-native-community/async-storage';

class SessionStore {
    constructor() {
        this.value = {};
    }

    async login(loginInformation, afterLoginCallback) {
        try {
            const _loginInformation = loginInformation;
            _loginInformation.isAdmin = _loginInformation.id == 1 || _loginInformation.id == 2;
            await AsyncStorage.setItem('@login', JSON.stringify(_loginInformation));
            this.value = _loginInformation;
            afterLoginCallback && afterLoginCallback();
        } catch (e) {
            // saving error
        }
    };



    async isLoggedIn(afterGettingCallback) {
        try {
            let loginInformation = await AsyncStorage.getItem('@login');
            loginInformation = JSON.parse(loginInformation);
            this.value = loginInformation;
            afterGettingCallback && afterGettingCallback(loginInformation !== null, loginInformation);
        } catch (e) {
            // saving error
        }
    };


    getLoginInformation() {
        return this.value;
    };

    isAdmin() {
        return this.value.isAdmin;
    }

    
    async logout(afterLogoutCallback) {
        try {
            await AsyncStorage.removeItem('@login');
            this.value = {};
            afterLogoutCallback && afterLogoutCallback();
        } catch (e) {
            // saving error
        }
    };



};

export default new SessionStore();