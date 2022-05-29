import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image
    
} from 'react-native';

import { COLORS, FONTS, SIZES, icons} from '../constants';
// import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {

    function renderNavBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 80,
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,

                }}            
            >
                <TouchableOpacity
                    style={{ justifyContent: 'center', width: 50 }}
                    onPress={() => console.log("Back")}
                >
                    <Image
                        source={icons.back_arrow}
                        style={{
                            width: 30,
                            height:30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'flex-end', width: 50 }}
                    onPress={() => console.log("More")}
                >
                    <Image
                        source={icons.more}
                        style={{
                            width: 30,
                            height:30,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white }}>
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>My Expenses</Text>
                    <Text>Summary (private)</Text>
                </View>

                <View>
                    <View>
                        <Image
                            source={icons.calendar}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue,
                            }}
                        />
                    </View>
                    <View>
                        <Text>25 May, 2022</Text>
                        <Text>20% more spending than last month</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
            {/* Navigation Bar Section*/}
            {renderNavBar()}

            {/* Header Section */}
            {renderHeader()}

            {/* Category Header Section */}
            {renderCategoryHeaderSection()}
        </View>
    )
}

export default Home;


