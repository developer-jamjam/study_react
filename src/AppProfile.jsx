import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Avartar from './components/Avatar';

function AppProfile() {
  return (
    <>
        <Avartar 
          image='https://images.unsplash.com/photo-1618183507099-4fa269f9b0ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          isNew={true}
        />
        <Profile image='https://images.unsplash.com/photo-1544241907-f3f1f5ded15a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
        name='SaGongSa' title='웹 프론트엔드 주니어 개발자' isNew={true}/>
    </>
  );
}

export default AppProfile;
