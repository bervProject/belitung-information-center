import { Injectable } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData: any;

  constructor(private firebaseAuthentication: FirebaseAuthentication) {
    this.firebaseAuthentication.onAuthStateChanged().subscribe(this.authChangeListener);
  }

  login(email: string, password: string): Promise<any> {
    return this.firebaseAuthentication.signInWithEmailAndPassword(email, password);
  }

  private authChangeListener(userInfo: any) {
    console.log(JSON.stringify(userInfo));
    this.userData = userInfo;
  }

  isUserLogin(): boolean {
    return !!this.userData;
  }
}
