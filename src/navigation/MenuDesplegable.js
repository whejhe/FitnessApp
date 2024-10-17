import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Workouts from "../screens/Workouts";
import Progress from "../screens/Progress";
import Nutrition from "../screens/Nutrition";
import List from "../screens/List";

const SideBar = createDrawerNavigator();

const MenuDesplegable = () => {
    return () => (
        <NavigationContainer>
            <SideBar.Navigator initialRouteName="Home">
                <SideBar.Screen name="Workouts" component={Workouts} />
                <SideBar.Screen name="Progress" component={Progress} />
                <SideBar.Screen name="Nutrition" component={Nutrition} />
                <SideBar.Screen name="List" component={List} />
            </SideBar.Navigator>
        </NavigationContainer>
    );
};

export default MenuDesplegable;