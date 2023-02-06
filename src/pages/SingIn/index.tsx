import { Text, View } from "react-native";
import { BtnLogar, Container, InputForm, LogoNU, TextMinimal, TextNavigation, Title } from "./style";
import { useFonts } from 'expo-font';
import { IProps } from "../../../@types/tipagem";

import { auth } from "../../services/Firebase.config";
import { useContext, useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { AuthContext } from "../../context/auth";

export default function SingIn( { navigation }:IProps) {


  const [fontsLoaded] = useFonts({
    'Poppins': require('../../Fonts/Poppins/Poppins-SemiBold.ttf'),
  });


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);



  if (user) {
    return navigation.navigate("Home");
  }
 
    function handleremail (e:any){
      setEmail(e.target.value)
    }
    function handlPassword(e:any){
      setPassword(e.target.value)
    }

    async function  Logar() {
      signInWithEmailAndPassword(email, password)
    }
    console.log(user)
    return (
      <Container>
        <LogoNU source={require('../../assets/logo.png')}/>
        <Title style={{
          fontFamily: 'Poppins',
          fontSize: 25,
          color: 'white',
        }}>
            Sua Conta
            <InputForm placeholder="Email" onChange={handleremail} />
            <InputForm placeholder="Senha" secureTextEntry={true}  onChange={handlPassword} />
            <TextMinimal>
            Não Tem Uma Conta? Crie Agora Gratuitamente
            <TextNavigation onPress={() => navigation.navigate('singUp')}>
             clique aqui
            </TextNavigation>

            </TextMinimal>
            <BtnLogar onPress={Logar} >
        
                ENTRAR
            </BtnLogar>

        </Title>
     
       
      </Container>
    );
  }