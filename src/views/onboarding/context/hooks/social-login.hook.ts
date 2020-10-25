import { useEffect, useState } from "react";
import firebase from "firebase";

const FACEBOOK_PROVIDER = "facebook";
const GOOGLE_PROVIDER = "google";

interface SocialLoginResponse {
    idToken: string;
    email: string;
}

export const useSocialLogin = () => {
  const [firebaseInstance, setFirebaseInstance] = useState<any>(null);
  const [googleProvider, setGoogleProvider] = useState<any>(null);
  const [facebookProvider, setFacebookProvider] = useState<any>(null);

  useEffect(() => {
    if (!firebaseInstance) {
      setFirebaseInstance(
        firebase.initializeApp({
          apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
          authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
          databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
          projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
          storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.REACT_APP_FIREBASE_APP_ID,
          measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (firebaseInstance) {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      googleAuthProvider.addScope("profile");
      setGoogleProvider(googleAuthProvider);
      const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
      setFacebookProvider(facebookAuthProvider);
    }
  }, [firebaseInstance]);

  const socialLogin = (
    provider: typeof FACEBOOK_PROVIDER | typeof GOOGLE_PROVIDER
  ): Promise<SocialLoginResponse> => {
    const isFacebook = provider === FACEBOOK_PROVIDER;
    if (!isFacebook && provider !== GOOGLE_PROVIDER) {
      throw Error("Unknown provider");
    }
    const authProvider = isFacebook ? facebookProvider : googleProvider;
    return firebaseInstance
      .auth()
      .signInWithPopup(authProvider)
      .then((data) => {
        const {
          user: { email },
        } = data;
        // @ts-ignore
        return firebase
          .auth()
          .currentUser.getIdToken(/* forceRefresh */ true)
          .then((idToken) => {
            return {
              idToken,
              email,
            };
          })
          .catch((error) => {
            // Handle error
            console.log(error);
          });
      })
      .catch((error) => console.log(error));
  };

  return {
    socialLogin,
  };
};
