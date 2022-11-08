
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStatusBar from "../Components/MyStatusBar";
import SideDrawer from "../Components/Drawer/Side.drawer";
import TabNavigator from "./Tab.navigator";

// ==============================================================


import ListDealScreen from "../Entities/Deal/List.deal.screen";
import ShowDealScreen from "../Entities/Deal/Show.deal.screen";
import ListProductScreen from "../Entities/Product/List.product.screen";
import ShowProductScreen from "../Entities/Product/Show.product.screen";
import ListCartScreen from "../Entities/Cart/List.cart.screen";
import ShowCartScreen from "../Entities/Cart/Show.cart.screen";
import ListUserScreen from "../Entities/User/List.user.screen";
import ShowUserScreen from "../Entities/User/Show.user.screen";


// ==============================================================

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// ==============================================================

const stackrops = {
  initialRouteName: "Tabs",
};

const screenOptions = {
  headerShown: true,
  header: (props: any) => <MyStatusBar {...props} />,
};

// ==============================================================

const StackTabNavigator = () => {
  return (
    <Stack.Navigator {...stackrops}>
      <Stack.Screen
        name="HomeTabNavigator"
        component={TabNavigator}
        options={screenOptions}
      />
      
        <Stack.Screen
            name="ListDealScreen"
            component={ListDealScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowDealScreen"
          component={ShowDealScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListProductScreen"
            component={ListProductScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowProductScreen"
          component={ShowProductScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListCartScreen"
            component={ListCartScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowCartScreen"
          component={ShowCartScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListUserScreen"
            component={ListUserScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowUserScreen"
          component={ShowUserScreen}
          options={screenOptions}
        />
        
    </Stack.Navigator>
  );
};

// ==============================================================

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStackTabNavigator"
      // @ts-ignore
      drawerStyle={{ width: wp(70) }}
      edgeWidth={15}
      screenOptions={{ swipeEnabled: true, headerShown: false }}
      drawerPosition="right"
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen
        name="HomeStackTabNavigator"
        component={StackTabNavigator}
      />
    </Drawer.Navigator>
  );
}
