import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ children }: { children: React.ReactNode }) => <View style={styles.card}>{children}</View>;

export default function Dashboard() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>NOVA • MOBILE</Text>
          <Text style={styles.title}>Your space.{ '\n' }Your downloads.</Text>
        </View>
        <View style={styles.avatar}><Ionicons name="sparkles" size={20} color="#A5B4FC" /></View>
      </View>

      <Card>
        <View style={styles.heroRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardLabel}>DOWNLOAD ACTIVITY</Text>
            <Text style={styles.heroNumber}>0 <Text style={styles.heroUnit}>active</Text></Text>
            <Text style={styles.muted}>Your download engine is not connected yet.</Text>
          </View>
          <View style={styles.circle}><Ionicons name="cloud-download-outline" size={26} color="#9BAEFF" /></View>
        </View>
        <Link href="/downloads" asChild>
          <Pressable style={styles.primaryButton}><Text style={styles.primaryText}>Open downloads</Text><Ionicons name="arrow-forward" size={16} color="#10162A" /></Pressable>
        </Link>
      </Card>

      <Text style={styles.sectionTitle}>Quick access</Text>
      <View style={styles.quickGrid}>
        <Link href="/browser" asChild><Pressable style={styles.quickCard}><Ionicons name="globe-outline" color="#91A5FF" size={24}/><Text style={styles.quickTitle}>Browse</Text><Text style={styles.muted}>Web browser shell</Text></Pressable></Link>
        <Link href="/library" asChild><Pressable style={styles.quickCard}><Ionicons name="folder-open-outline" color="#65D6C0" size={24}/><Text style={styles.quickTitle}>Library</Text><Text style={styles.muted}>File collection</Text></Pressable></Link>
      </View>

      <Text style={styles.sectionTitle}>Coming online</Text>
      <Card>
        <Feature icon="speedometer-outline" title="Accelerated downloads" description="Range-aware segmented download workers"/>
        <Feature icon="shield-checkmark-outline" title="Safe browsing" description="Permissions, profile isolation and secure storage"/>
        <Feature icon="sparkles-outline" title="AI assistant" description="Smart categorization and download insights"/>
      </Card>
      <Text style={styles.footer}>Foundation build • Features are added in verified milestones</Text>
    </ScrollView>
  );
}

function Feature({ icon, title, description }: { icon: keyof typeof Ionicons.glyphMap; title: string; description: string }) {
  return <View style={styles.feature}><Ionicons name={icon} size={20} color="#8EA2FF"/><View style={{flex:1}}><Text style={styles.quickTitle}>{title}</Text><Text style={styles.muted}>{description}</Text></View><View style={styles.tag}><Text style={styles.tagText}>PLANNED</Text></View></View>;
}

const styles = StyleSheet.create({
  page:{flex:1,backgroundColor:'#0B1020'},content:{padding:20,paddingTop:28,gap:18},
  header:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:4},
  eyebrow:{color:'#8EA2FF',fontSize:11,fontWeight:'800',letterSpacing:2},
  title:{color:'#F4F6FF',fontSize:29,fontWeight:'800',lineHeight:34,marginTop:8},
  avatar:{width:42,height:42,borderRadius:15,backgroundColor:'#202A45',alignItems:'center',justifyContent:'center'},
  card:{backgroundColor:'#151D31',borderColor:'#27324A',borderWidth:1,borderRadius:22,padding:18,gap:16},
  heroRow:{flexDirection:'row',alignItems:'center'},
  cardLabel:{color:'#8D9AB4',fontSize:10,fontWeight:'800',letterSpacing:1.5},
  heroNumber:{color:'#F4F6FF',fontSize:38,fontWeight:'800',marginTop:6},
  heroUnit:{fontSize:16,color:'#9AA8C3',fontWeight:'600'},
  muted:{color:'#8996B1',fontSize:12,lineHeight:18,marginTop:3},
  circle:{width:58,height:58,borderRadius:29,backgroundColor:'#253254',alignItems:'center',justifyContent:'center'},
  primaryButton:{backgroundColor:'#A3B3FF',borderRadius:14,padding:14,flexDirection:'row',justifyContent:'center',alignItems:'center',gap:8},
  primaryText:{color:'#11182B',fontSize:13,fontWeight:'800'},
  sectionTitle:{color:'#E9EDFF',fontSize:16,fontWeight:'700',marginTop:2},
  quickGrid:{flexDirection:'row',gap:12},
  quickCard:{flex:1,backgroundColor:'#151D31',borderWidth:1,borderColor:'#27324A',borderRadius:18,padding:16,gap:7},
  quickTitle:{color:'#E9EDFF',fontSize:13,fontWeight:'700'},
  feature:{flexDirection:'row',alignItems:'center',gap:12,paddingVertical:3},
  tag:{backgroundColor:'#26304A',borderRadius:8,paddingHorizontal:8,paddingVertical:5},
  tagText:{color:'#A5B3D0',fontSize:9,fontWeight:'800'},
  footer:{textAlign:'center',color:'#64718C',fontSize:10,marginTop:2,marginBottom:6}
});
