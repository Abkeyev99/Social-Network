import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {
    useLocation,
    useNavigate, useParams
} from 'react-router-dom';


type PathParamsType = {
    userId:string
}

type MapStateToPropsType = {
    profile:any
}
type MapDispatchToPropsType = {
    setUsersProfile: (profile: null) => void
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

export type PropsType = React.Component<RouteComponentProps<PathParamsType>> & OwnPropsType

function withRouter(Component:any) {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        const userId = this.props.router.params.userId || 2;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                debugger
                this.props.setUsersProfile(response.data)
            })
    }


    render() {
        return (

            <div>
                <Profile {...this.props} profile={this.props}/>
            </div>
        );
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state: any):MapStateToPropsType => ({
    profile: state.profilePage.profile
})



export default connect(mapStateToProps, {WithUrlDataContainerComponent})(withRouter(ProfileContainer));