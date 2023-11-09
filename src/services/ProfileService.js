import axios from 'axios';

const PROFILE_API_BASE_URL = "http://localhost:8080/user/profiles";

class ProfileService {

    getProfiles() {
        return axios.get(PROFILE_API_BASE_URL);
    }

    createProfile(profile) {
        return axios.post(PROFILE_API_BASE_URL, profile);
    }

    getProfileById(profileId) {
        return axios.get(`${PROFILE_API_BASE_URL}/${profileId}/records`);
    }

    updateProfile(profile, profileId) {
        return axios.put(PROFILE_API_BASE_URL + "/" + profileId, profile);
    }

    deleteProfile(profileId) {
        return axios.delete(PROFILE_API_BASE_URL + "/" + profileId);
    }
}

export default new ProfileService();
