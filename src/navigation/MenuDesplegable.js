import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";

import { Workouts, WorkoutsPlans, Details, List, Nutrition, Progress, SleepTracker, Settings, PersonalRecords, FitnessArticles, DietAndMealPlans, Challenges, Home } from "../screens/index";

const SideBar = createDrawerNavigator();

const MenuDesplegable = () => {
    return (
        <SideBar.Navigator initialRouteName="Home">
                <SideBar.Screen name="Home" component={Home} />
                <SideBar.Screen name="Challenges" component={Challenges} />
                <SideBar.Screen name="Details" component={Details} />
                <SideBar.Screen name="DietAndMealPlans" component={DietAndMealPlans} />
                <SideBar.Screen name="FitnessArticles" component={FitnessArticles} />
                <SideBar.Screen name="List" component={List} />
                <SideBar.Screen name="Nutrition" component={Nutrition} />
                <SideBar.Screen name="PersonalRecords" component={PersonalRecords} />
                <SideBar.Screen name="Progress" component={Progress} />
                <SideBar.Screen name="SleepTracker" component={SleepTracker} />
                <SideBar.Screen name="Workouts" component={Workouts} />
                <SideBar.Screen name="WorkoutsPlans" component={WorkoutsPlans} />
            </SideBar.Navigator>
    )
};

export default MenuDesplegable;