import firebase from 'firebase/app';
import 'firebase/firestore';

class FirebaseService {
  constructor() {
    this.firestore = firebase.firestore();
    this.currentUser = firebase.auth().currentUser;
  }

  // Method to fetch user data
  async getUserData(userId) {
    try {
      const userDoc = await this.firestore.collection('users').doc(userId).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        return userData;
      } else {
        console.log('User document does not exist.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  }

  // Method to fetch user's total hours

  async getUserTotalHours(userId) {
    try {
      const userDoc = await this.firestore.collection('TimeSheet').doc(userId).get();
  
      if (userDoc.exists) {
        const userData = userDoc.data();
        console.log('User Data:', userData);
      
        // Check if a specific condition is met (replace with your actual condition)
        if (userData) {
          const hoursDoc = await this.firestore
            .collection('TimeSheet')
            .doc(userId)
            .collection('AllHours')
            .doc('09-24-2023-Hours')
            .get();
      
          if (hoursDoc.exists) {
            const hoursData = hoursDoc.data();
            console.log('User Hours:', hoursData);
            return hoursData;
          } else {
            console.log('Hours document does not exist.');
            return null;
          }
        } else {
          console.log('Invalid user data.');
          return null;
        }
      } else {
        console.log('User document does not exist.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user total hours:', error);
      return null;
    }
  }
  
  
  
  
}

export default new FirebaseService();



