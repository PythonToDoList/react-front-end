import React, { Component } from 'react';


class Profile extends Component {
    render() {
        return (
            <div>
                <h2>Profile Info</h2>
                <p>username</p>
                <p>email@email.com</p>
                <p>Joined on: 01/01/2017</p>
                <p>Tasks To Go: 99999</p>
                <p>Tasks Overdue: 99999</p>
                <p>Tasks Completed: 99999</p>
            </div>
        )
    }
}


export default Profile;