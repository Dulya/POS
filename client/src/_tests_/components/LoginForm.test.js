import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import LoginFormContainer from '../../views/LoginForm';
import { LoginForm } from '../../views/LoginForm';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);
let container;
let component;
let store;
const initialState = {};

describe('Container <LoginForm>', () => {
    beforeEach(() => {
        //create the store with initial state
        store = mockStore(initialState);

        container = mount(
            <Provider store={store}>
                <Router>
                    <LoginFormContainer />
                </Router>
            </Provider>
        );
        component = container.find(LoginForm);
    });

    it('Should render both container and component', () => {
        expect(container.length).toBeTruthy();
        expect(component.length).toBeTruthy();
    });

    it('Should map actions to props', () => {
        const expectedPropKeys = ['loginUser', 'afterValidateUser']
        expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
    });

    it('Should respond to username change event and chnage the state of LoginForm component', () => {
        component.find('#userinput').simulate('change', { target: { name: 'username', value: 'john' } });
        expect(component.state('user_name')).toEqual('john');
    });

    it('Should respond to password change event and chnage the state of LoginForm component', () => {
        component.find('#password').simulate('change', { target: { name: 'password', value: 'password' } });
        expect(component.state('password')).toEqual('password');
    });

    it('Should call handlSubmit once on onclick event of form submit', () => {
        const loginSubmissionForm = jest.spyOn(component.instance(), 'handleSubmit');
        component.instance().forceUpdate();
        component.find('#submit-button').simulate('click');
        expect(loginSubmissionForm).toHaveBeenCalledTimes(1);
    });

    it('Should call componentDidMount once on component mount', () => {
        const afterValidateUser = jest.fn(() => Promise.resolve());
        const history = { push: jest.fn() }
        const props = { afterValidateUser, history };
        const cdmSpy = jest.spyOn(LoginForm.prototype, 'componentDidMount');

        mount(<LoginForm {...props} />);
        expect(cdmSpy).toHaveBeenCalledTimes(1);
    });
});



