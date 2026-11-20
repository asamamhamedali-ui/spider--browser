import { View, Text, StyleSheet } from 'react-native';
export default function SettingsScreen() {
  const rows = ['Appearance','Download preferences','Browser privacy','AI provider','Storage & backups','About Nova'];
  return <View style={s.page}><Text style={s.title}>Settings</Text><Text style={s.subtitle}>Personalize your experience</Text>
    <View style={s.list}>{rows.map((r,i)=><View key={r} style={s.row}><View style={s.dot}/><Text style={s.label}>{r}</Text><Text style={s.state}>{i===0?'Dark':'Planned'}</Text></View>)}</View>
    <Text style={s.note}>Settings controls will be wired to persisted configuration in a later milestone.</Text>
  </View>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:'#0B1020',padding:20,paddingTop:28},title:{fontSize:27,fontWeight:'800',color:'#F4F6FF'},subtitle:{color:'#8B98B3',fontSize:12,marginTop:5},list:{marginTop:24,backgroundColor:'#151D31',borderColor:'#27324A',borderWidth:1,borderRadius:18,overflow:'hidden'},row:{minHeight:58,flexDirection:'row',alignItems:'center',paddingHorizontal:15,borderBottomColor:'#27324A',borderBottomWidth:StyleSheet.hairlineWidth,gap:12},dot:{width:8,height:8,borderRadius:4,backgroundColor:'#8EA2FF'},label:{flex:1,color:'#E7EDFF',fontSize:13,fontWeight:'600'},state:{color:'#8290AC',fontSize:11},note:{color:'#75829C',fontSize:12,lineHeight:18,marginTop:18}});
