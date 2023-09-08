import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";

export type ProfileToPropsType = {
    setUsersProfile: (profile: null) => void
}


class ProfileContainer extends React.Component<ProfileToPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }


    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props} />
            </div>
        );
    }
};

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);