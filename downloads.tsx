import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DownloadsScreen() {
  return (
    <View style={s.page}>
      <View style={s.header}><View><Text style={s.title}>Downloads</Text><Text style={s.subtitle}>Manage files in one place</Text></View><Pressable style={s.add} accessibilityLabel="Add download"><Ionicons name="add" size={24} color="#10162A"/></Pressable></View>
      <View style={s.stats}>
        <Stat label="Active" value="0"/><Stat label="Completed" value="0"/><Stat label="Queued" value="0"/>
      </View>
      <View style={s.empty}>
        <View style={s.icon}><Ionicons name="download-outline" size={30} color="#9BAEFF"/></View>
        <Text style={s.emptyTitle}>No downloads yet</Text>
        <Text style={s.emptyText}>Download controls and the persistent native engine will arrive in the Download Engine milestone.</Text>
      </View>
      <View style={s.notice}><Ionicons name="information-circle-outline" size={18} color="#A4B2D0"/><Text style={s.noticeText}>Prototype screen — no real transfer is started by this scaffold.</Text></View>
    </View>
  );
}
function Stat({label,value}:{label:string;value:string}) { return <View style={s.stat}><Text style={s.statValue}>{value}</Text><Text style={s.statLabel}>{label}</Text></View>; }
const s=StyleSheet.create({
 page:{flex:1,backgroundColor:'#0B1020',padding:20,paddingTop:28},
 header:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
 title:{fontSize:27,fontWeight:'800',color:'#F4F6FF'},subtitle:{color:'#8B98B3',fontSize:12,marginTop:5},
 add:{width:42,height:42,borderRadius:14,backgroundColor:'#A3B3FF',alignItems:'center',justifyContent:'center'},
 stats:{flexDirection:'row',gap:10,marginTop:22},
 stat:{flex:1,backgroundColor:'#151D31',borderColor:'#27324A',borderWidth:1,borderRadius:16,padding:14},
 statValue:{fontSize:21,fontWeight:'800',color:'#F4F6FF'},statLabel:{color:'#8B98B3',fontSize:11,marginTop:4},
 empty:{flex:1,alignItems:'center',justifyContent:'center',paddingHorizontal:26},
 icon:{width:72,height:72,borderRadius:24,backgroundColor:'#202B48',alignItems:'center',justifyContent:'center',marginBottom:18},
 emptyTitle:{fontSize:18,color:'#F0F3FF',fontWeight:'700'},emptyText:{color:'#8794AE',fontSize:13,lineHeight:20,textAlign:'center',marginTop:9},
 notice:{flexDirection:'row',gap:9,backgroundColor:'#151D31',borderRadius:13,padding:12,alignItems:'center'},
 noticeText:{flex:1,color:'#8C9AB5',fontSize:11,lineHeight:16}
});
