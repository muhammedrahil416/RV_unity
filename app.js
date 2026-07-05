import { ScrollView, View } from "react-native";

import ActionTile from "./components/ActionTile";
import Card from "./components/Card";
import ProfileHeader from "./components/ProfileHeader";
import StatTile from "./components/StatTile";

import {
  actions,
  featuredEvent,
  stats,
  user
} from "./data/mockData";

export default function App() {
  return (

    
      <ScrollView
style={{
backgroundColor:"#121212"
}}
>

      {/* Profile Header */}
      <ProfileHeader user={user} />


      {/* Stat Tiles */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 10
        }}
      >

        {stats.map(item => (

          <StatTile
            key={item.label}
            label={item.label}
            value={item.value}
          />

        ))}

      </View>


      {/* Action Grid */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: 20
        }}
      >

        {actions.map(item => (

          <ActionTile
            key={item.label}
            icon={item.icon}
            label={item.label}
          />

        ))}

      </View>


      {/* Featured Card */}
      <Card
        title={featuredEvent.title}
        subtitle={featuredEvent.subtitle}
        image={featuredEvent.image}
      />
    
    </ScrollView>

  );
}