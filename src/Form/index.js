import React, { Component } from 'react';
import InputField, { TextArea } from '../Field';
import Button from '../Button';


class Form extends Component {
    render() {
        const { children } = this.props;
        return (
            <form>
            { children }
            </form>
        )
    }
}

const RegistrationForm = () =>
    <div>
        <h2>Don't have an account? Register here!</h2>
        <Form>
            <InputField type="text" name="username" placeholder="username" />
            <InputField type="email" name="email" placeholder="email" />
            <InputField type="password" name="password" placeholder="password" />
            <InputField type="password" name="password2" placeholder="password2" />
            <Button type="submit">Register</Button>
        </Form>
    </div>


const LoginForm = () =>
    <div>
        <h2>Already have an account? Sign in!</h2>
        <Form>
            <InputField type="text" name="username" placeholder="username" />
            <InputField type="password" name="password" placeholder="password" />
            <Button type="submit">Sign In</Button>
        </Form>
    </div>

const TaskForm = () =>
    <div>
        <Button type="button">&times; Close</Button>
        <h2>Create New Task</h2>
        <Form>
            <InputField type="text" name="name" placeholder="Task name" />
            <InputField type="datetime" name="due_date" placeholder="Due date" />
            <InputField type="radio" name="completed" value="yes" />Yes
            <InputField type="radio" name="completed" value="no" />No
            <TextArea name="note" placeholder="Other Information?"></TextArea>
            <Button type="submit">Add new task</Button>
        </Form>
    </div>

const ProfileForm = () =>
    <div>
        <Button type="button">&times; Close</Button>
        <h2>Edit Profile</h2>
        <Form>
            <InputField type="text" name="username" placeholder="username" />
            <InputField type="email" name="email" placeholder="email" />
            <InputField type="password" name="password" placeholder="password" />
            <Button type="submit">Update Profile</Button>
        </Form>
    </div>


export {
    RegistrationForm,
    LoginForm,
    TaskForm,
    ProfileForm
};