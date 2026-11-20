import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function LibraryScreen() {
  return <View style={s.page}><Text style={s.title}>Library</Text><Text style={s.subtitle}>Your local file collection</Text>
    <View style={s.empty}><Ionicons name="folder-open-outline" size={34} color="#82D8C3"/><Text style={s.heading}>Library is not connected</Text><Text style={s.text}>Storage permissions, file indexing, categories and duplicate detection are planned. We will request only the permissions the feature needs.</Text></View>
  </View>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#0B1020',padding:20,paddingTop:28},title:{fontSize:27,fontWeight:'800',color:'#F4F6FF'},subtitle:{color:'#8B98B3',fontSize:12,marginTop:5},empty:{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:26,gap:12},heading:{fontSize:18,fontWeight:'700',color:'#EAF0FF'},text:{fontSize:13,lineHeight:20,textAlign:'center',color:'#8794AE'}});
