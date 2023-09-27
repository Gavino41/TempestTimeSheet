import { auth } from '../Firebase/Index';
import firebase from 'firebase';

class AuthService {
  static checkUserAndNavigate(navigation) {
    const firestore = firebase.firestore();
    const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
            firestore
              .collection('users')
              .doc(user.uid)
              .get()
              .then(doc => {
                if (doc.exists) {
                  const userData = doc.data();
                  if (userData.role === 'User') {
                    console.log('navigating user home');
                    navigation.replace('UserHome');
                  } else if (userData.role === 'Admin') {
                    console.log('navigating admin home');
                    navigation.replace('AdminHome');
                  }
                  else{
                    console.log('not user or admin');
                  }
                }
                else {
                  console.log('not doc found')
                }
          })
          .catch(error => console.log(error));
      }
    });

    return unsubscribe;
  }
}

export default AuthService;
