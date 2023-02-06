import { useContext } from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../context/auth";
import { auth } from "../../services/Firebase.config";

import { IProps } from "../../../@types/tipagem";

export default function HomeScreen({navigation}:IProps) {
  const [signOut, loading, error] = useSignOut(auth);

    const { user }:any = useContext(AuthContext)

    if(!user){
      return navigation.navigate('singIn')
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
          <TouchableOpacity onPress={signOut}>
            sair da conta
          </TouchableOpacity>
      </View>
    );
  }