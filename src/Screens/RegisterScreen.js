import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomButton from '../Components/CustomButton'
import String from '../Constant/String'
import TextInputComponent from '../Components/TextInputComponent'
import { moderateScale, moderateScaleVertical, textScale } from '../Styles/Responsive'
import auth  from '@react-native-firebase/auth'
import UserContext from '../UserProvider'
const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [secureText, setSecureText] = useState(true);
  const {setUser}=useContext(UserContext)
  const handelRegisterUser= async()=>{
  try{
    if(! validPassword(password)){
      Alert.alert('PassWord Requirements','Password should be at least 6 characters long and include special characters.')
      return
    }
    if (password !== confirmPass) {
      Alert.alert('Password Mismatch', 'Passwords do not match. Please re-enter.');
      return;
    }
    const userCredential =await auth().createUserWithEmailAndPassword(email,password)
    const user=userCredential.user
    setUser(user)
    navigation.navigate("Home")
  } catch(error){

    console.error('Signup Error:', error);
    let errorMessage = 'Signup failed. Please try again.';
    
    Alert.alert('Signup Error', errorMessage);
  }


  }

  const validPassword=(password)=>{
     const regex=/^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
     return regex.test(password)
  }
  return (
    <View style={styles.container}>
     <View style={styles.textView}>
          <Text style={styles.title}>{String.CREATE_NEW_ACCOUNT}</Text>
          <Text style={styles.subtitle}>{String.CREATE_AN_ACCOUNT_SO_YOU_CAN_CONTINUE}</Text>
        </View>
        <View style={styles.inputView}>
          <TextInputComponent
            value={email}
            placeholder={String.EMAIL}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInputComponent
            placeholder={String.PASSWORD}
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={secureText}
            secureText={secureText ? String.SHOW : String.HIDE}
            onPressSecure={() => setSecureText(!secureText)}
          />
          <TextInputComponent
            placeholder={String.CONFIRM_PASS}
            value={confirmPass}
            onChangeText={(value) => setConfirmPass(value)}
            secureTextEntry={secureText}
            secureText={secureText ? String.SHOW : String.HIDE}
            onPressSecure={() => setSecureText(!secureText)}
          />
          <CustomButton text={String.REGISTER} onPress={handelRegisterUser} />
        </View>
    </View>
  )
}

export default RegisterScreen

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: textScale(24),
    paddingHorizontal: moderateScale(16),
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: textScale(16),
    paddingHorizontal: moderateScale(16),
    fontWeight: '600',
    marginTop: 8,
  },
  inputView: {
    flex: 0.6,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(16),
  },
})