import { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BrowserScreen() {
  const [address, setAddress] = useState('');
  return (
    <View style={s.page}>
      <Text style={s.heading}>Browser</Text>
      <Text style={s.caption}>Chromium-based engine is a planned native milestone.</Text>
      <View style={s.address}>
        <Ionicons name="search-outline" color="#98A6C4" size={19}/>
        <TextInput value={address} onChangeText={setAddress} placeholder="Search or enter a URL" placeholderTextColor="#7785A0" autoCapitalize="none" style={s.input}/>
        <Pressable accessibilityLabel="Clear address" onPress={() => setAddress('')}><Ionicons name="close-circle-outline" color="#7F8CA6" size={19}/></Pressable>
      </View>
      <View style={s.center}>
        <View style={s.globe}><Ionicons name="globe-outline" size={34} color="#9CADFF"/></View>
        <Text style={s.title}>Browser foundation</Text>
        <Text style={s.body}>This screen is a UI scaffold. WebView navigation, tab management, secure permissions and download interception will be implemented in the Browser milestone.</Text>
      </View>
    </View>
  );
}
const s=StyleSheet.create({
  page:{flex:1,backgroundColor:'#0B1020',padding:20,paddingTop:28},
  heading:{fontSize:27,fontWeight:'800',color:'#F4F6FF'},
  caption:{color:'#8B98B3',fontSize:12,marginTop:5},
  address:{marginTop:22,backgroundColor:'#151D31',borderColor:'#2A3650',borderWidth:1,borderRadius:15,paddingHorizontal:13,height:52,flexDirection:'row',alignItems:'center',gap:10},
  input:{flex:1,color:'#F4F6FF',fontSize:14},
  center:{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:24},
  globe:{width:76,height:76,borderRadius:25,backgroundColor:'#202B48',alignItems:'center',justifyContent:'center',marginBottom:18},
  title:{fontSize:19,color:'#F0F3FF',fontWeight:'700'},
  body:{color:'#8794AE',fontSize:13,lineHeight:20,textAlign:'center',marginTop:10}
});
