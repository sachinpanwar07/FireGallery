import {StyleSheet, Text, View, ImageBackground, Alert} from 'react-native';
import React, {useState, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import UserContext, { UserProvider } from '../UserProvider';
import TextInputComponent from '../Components/TextInputComponent';
import {moderateScale, textScale,moderateScaleVertical} from '../Styles/Responsive';
import String from '../Constant/String';
import CustomButton from '../Components/CustomButton';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecuretext] = useState(true);
  const {userData, setUserData} = useContext(UserContext);
  const handleLogin = async () => {
   
    try {
      if(!email || !password){
        Alert.alert("Enter Email and PassWord")
      }
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;

      // Set user data in context
      setUserData(user);
      console.log('User Data:', user);

      // You can also navigate to the profile screen here
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text
          style={{
            fontSize: textScale(24),
            paddingHorizontal: moderateScale(16),
            fontWeight: 900,
          }}>
          {String.WelCome_BACk}
        </Text>
        <Text
          style={{
            fontSize: textScale(16),
            paddingHorizontal: moderateScale(16),
            fontWeight: 600,
          }}>
          {String.WE_ARE_HAPPY_TO_SEE}
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInputComponent
          value={email}
          placeholder={String.EMAIL}
          onChangeText={value => setEmail(value)}
        />
        <TextInputComponent
          placeholder={String.PASSWORD}
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={secureText}
          secureText={secureText ? String.SHOW : String.HIDE}
          onPressSecure={() => setSecuretext(!secureText)}
        />
        <CustomButton text={String.LOGIN} onPress={handleLogin} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
  },
  textView: {
    marginVertical: moderateScaleVertical(40),
    flex: 0.3,
  },
  inputView: {
    flex: 0.6,

    justifyContent: 'center',
  },
});
