import react from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import LoginForm from '../../views/LoginForm';
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
const state = {
    user_name: 'Jogn',
    user_type: 'normal'
}
store = state => {
    return {
        default: jest.fn(),
        dispatch: jest.fn(),
        getState: jest.fn(() => state)
    }
}

describe('Container <LoginForm>', () => {
    beforeEach(() => {
        store = mockStore({});
    });

    container = mount(
        <Provider store={store}>
            <Router>
                <LoginForm />
            </Router>
        </Provider>
    );

    component = container.find(LoginForm);

    it('Should render both container and component', () => {
        expect(container.length).toBeTruthy();
        expect(component.length).toBeTruthy();
    });
});



