import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Workouts, WorkoutsPlans, Details, List, Nutrition, Progress, SleepTracker, Settings, PersonalRecords, FitnessArticles, DietAndMealPlans, Challenges, Home, Perfil, CierreDeSesion } from "../screens/index";

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
                <SideBar.Screen name="Settings" component={Settings} />
                <SideBar.Screen name="Perfil" component={Perfil} />
                <SideBar.Screen name="CierreDeSesion" component={CierreDeSesion} />
            </SideBar.Navigator>
    )
};

export default MenuDesplegable;